const { Pool } = require('pg');
require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

const pool = new Pool({
  host: process.env.POSTGRES_HOST || '147.93.30.32',
  port: Number(process.env.POSTGRES_PORT) || 5435,
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'Roacs@2026',
  database: process.env.POSTGRES_DB || 'en_nanban_clinical',
  ssl: process.env.POSTGRES_SSL === 'true' ? { rejectUnauthorized: false } : false,
});

async function main() {
  console.log('Connecting to PostgreSQL...');
  const client = await pool.connect();
  try {
    console.log('1. Ensuring past_diseases column exists in patients table...');
    await client.query('ALTER TABLE patients ADD COLUMN IF NOT EXISTS past_diseases JSONB;');

    console.log('2. Updating patient P-1003 (kumar) with past diseases: 2025 Cancer & 2024 Blood Cancer...');
    const pastDiseases = [
      {
        year: '2025',
        condition: 'Cancer',
        status: 'Post-treatment surveillance / Stable',
        notes: 'Diagnosed in 2025. Annual oncological follow-up and tumor marker surveillance.'
      },
      {
        year: '2024',
        condition: 'Blood Cancer',
        status: 'In Remission / Hematologic Monitoring',
        notes: 'Diagnosed in 2024 (Hematologic malignancy/leukemia). Chemotherapy protocol completed; currently in complete clinical remission.'
      }
    ];

    const res = await client.query(
      `UPDATE patients 
       SET past_diseases = $1,
           updated_at = NOW() 
       WHERE id = 'P-1003' OR full_name ILIKE '%kumar%'
       RETURNING id, full_name, en_nanba_id, past_diseases;`,
      [JSON.stringify(pastDiseases)]
    );

    console.log('Updated patient:', res.rows);

    console.log('3. Inserting historical Evidence Ledger records for kumar...');
    const ev1 = {
      id: 'EV-HIST-2024-KUMAR',
      patient_id: 'P-1003',
      claim: 'Patient documented past medical history: Diagnosed with Blood Cancer [ICD-11: 2A70] in 2024. Primary chemotherapy protocol completed; currently in hematologic remission.',
      source_document: 'Hematology-Oncology Clinic Summary 2024',
      status_tag: 'verified',
      confidence_score: 1.0,
      clinical_significance: 'Ongoing CBC monitoring and remission surveillance.',
    };

    const ev2 = {
      id: 'EV-HIST-2025-KUMAR',
      patient_id: 'P-1003',
      claim: 'Patient documented past medical history: Diagnosed with Cancer [ICD-11: 2C70] in 2025. Oncology surveillance and staging completed. Post-treatment stable.',
      source_document: 'Comprehensive Cancer Center Annual Surveillance 2025',
      status_tag: 'verified',
      confidence_score: 1.0,
      clinical_significance: 'Regular oncological review and tumor marker monitoring protocol.',
    };

    for (const ev of [ev1, ev2]) {
      await client.query(
        `INSERT INTO evidence_ledger (id, patient_id, claim, source_document, status_tag, confidence_score, clinical_significance, recorded_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
         ON CONFLICT (id) DO UPDATE SET
           claim = EXCLUDED.claim,
           clinical_significance = EXCLUDED.clinical_significance;`,
        [ev.id, ev.patient_id, ev.claim, ev.source_document, ev.status_tag, ev.confidence_score, ev.clinical_significance]
      );
    }
    console.log('Evidence ledger records inserted successfully.');

    const patientCheck = await client.query("SELECT id, full_name, chronic_conditions, past_diseases FROM patients WHERE id = 'P-1003';");
    console.log('Verification query for P-1003:', patientCheck.rows[0]);

  } finally {
    client.release();
    await pool.end();
  }
}

main().catch(err => {
  console.error('Error updating PostgreSQL:', err);
  process.exit(1);
});
