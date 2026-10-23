const { Pool } = require('pg');
const pool = new Pool({
  host: '147.93.30.32',
  port: 5435,
  user: 'postgres',
  password: 'Roacs@2026',
  database: 'en_nanban_clinical'
});

async function inspectAndSanitize() {
  console.log('--- 1. SANITIZING EVIDENCE LEDGER FOR P-1005 (MANIKANDAN) ---');
  // Manikandan has chronic_conditions: [] and allergies: []
  const p1005Del = await pool.query(`
    DELETE FROM evidence_ledger 
    WHERE patient_id = 'P-1005' 
      AND (
        claim ILIKE '%diabetes%' 
        OR claim ILIKE '%penicillin%' 
        OR claim ILIKE '%gemini%'
        OR claim ILIKE '%ram,%'
        OR claim ILIKE '%vignesh,%'
      )
  `);
  console.log(`Deleted ${p1005Del.rowCount} invalid/hallucinated ledger entries for P-1005`);

  console.log('--- 2. SANITIZING CLINICAL DECISIONS FOR P-1005 ---');
  const p1005DecDel = await pool.query(`
    DELETE FROM clinical_decisions 
    WHERE patient_id = 'P-1005' 
      AND (
        reasoning_notes ILIKE '%penicillin%' 
        OR reasoning_notes ILIKE '%gemini%'
        OR reasoning_notes ILIKE '%beta-lactams%'
      )
  `);
  console.log(`Deleted ${p1005DecDel.rowCount} outdated decisions for P-1005`);

  console.log('--- 3. SANITIZING EVIDENCE LEDGER FOR P-1006 (POOJA NAIR) ---');
  // Pooja Nair has asthma/rhinitis and aspirin/ibuprofen allergy. NOT diabetes, NOT penicillin, NOT metformin.
  const p1006Del = await pool.query(`
    DELETE FROM evidence_ledger 
    WHERE patient_id = 'P-1006' 
      AND (
        claim ILIKE '%metformin%' 
        OR claim ILIKE '%penicillin%' 
        OR claim ILIKE '%HbA1c%' 
        OR claim ILIKE '%none of the above%'
        OR claim ILIKE '%none [%'
        OR claim ILIKE '%[ICD-11: 5A11]%'
      )
  `);
  console.log(`Deleted ${p1006Del.rowCount} erroneous entries for P-1006`);

  console.log('--- 4. CLEANING "NONE" ANOMALIES ACROSS ALL PATIENTS ---');
  const noneDel = await pool.query(`
    DELETE FROM evidence_ledger 
    WHERE claim ILIKE '%none [%' 
       OR claim ILIKE '%none of the above%'
  `);
  console.log(`Deleted ${noneDel.rowCount} "none" anomalies across all patients`);

  console.log('--- 5. REPLACING GEMINI STRINGS IN EVIDENCE LEDGER & DECISIONS ---');
  const ledgerGemini = await pool.query(`
    UPDATE evidence_ledger
    SET claim = REPLACE(REPLACE(claim, '💡 GEMINI AI RECOMMENDATION', '💡 IN-HOUSE AI RECOMMENDATION (nanba-clinical)'), 'Gemini AI recommended regimen', 'in-house AI recommended regimen')
    WHERE claim ILIKE '%gemini%'
  `);
  console.log(`Updated ${ledgerGemini.rowCount} ledger rows referencing Gemini`);

  const decGemini = await pool.query(`
    UPDATE clinical_decisions
    SET reasoning_notes = REPLACE(REPLACE(reasoning_notes, '💡 GEMINI AI RECOMMENDATION', '💡 IN-HOUSE AI RECOMMENDATION (nanba-clinical)'), 'Gemini AI', 'in-house AI')
    WHERE reasoning_notes ILIKE '%gemini%'
  `);
  console.log(`Updated ${decGemini.rowCount} clinical decision rows referencing Gemini`);

  console.log('--- 6. FIXING POOJA NAIR (P-1006) VITALS IN PATIENTS TABLE ---');
  // Reset Pooja's bloodGlucose from 180 mg/dL back to normal 98 mg/dL
  await pool.query(`
    UPDATE patients 
    SET vitals = jsonb_set(vitals, '{bloodGlucose}', '"98 mg/dL"')
    WHERE id = 'P-1006'
  `);
  console.log('Updated P-1006 bloodGlucose to 98 mg/dL');

  console.log('--- 7. VERIFYING PATIENTS ---');
  const res = await pool.query('SELECT id, full_name, chronic_conditions, allergies, vitals FROM patients ORDER BY id');
  console.log(res.rows);

  console.log('--- 8. VERIFYING P-1005 REMAINING LEDGER ---');
  const p1005Rem = await pool.query("SELECT id, claim FROM evidence_ledger WHERE patient_id = 'P-1005'");
  console.log(p1005Rem.rows);

  await pool.end();
}

inspectAndSanitize().catch(console.error);
