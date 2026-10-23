const { Pool } = require('pg');
const pool = new Pool({
  host: '147.93.30.32',
  port: 5435,
  user: 'postgres',
  password: 'Roacs@2026',
  database: 'en_nanban_clinical'
});

async function check() {
  const pts = await pool.query('SELECT id, en_nanba_id, full_name, age, gender, chronic_conditions, allergies, vitals, medications, labs, imaging, past_diseases FROM patients ORDER BY id');
  console.log('--- PATIENTS IN DB ---');
  for (const r of pts.rows) {
    console.log(JSON.stringify({
      id: r.patient_id,
      name: r.full_name,
      chronic: r.chronic_conditions,
      allergies: r.allergies,
      vitals: r.vitals,
      meds: r.medications,
      labs: r.labs
    }, null, 2));
  }

  const cols = await pool.query("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'evidence_ledger'");
  console.log('--- EVIDENCE LEDGER COLUMNS ---');
  console.log(cols.rows);

  const ledger = await pool.query("SELECT patient_id, count(*), array_agg(DISTINCT claim) as claims FROM evidence_ledger GROUP BY patient_id");
  console.log('--- EVIDENCE LEDGER BY PATIENT ---');
  for (const row of ledger.rows) {
    console.log(`Patient ${row.patient_id} (Total: ${row.count}):`);
    row.claims.forEach(c => console.log(`  - ${c}`));
  }

  await pool.end();
}
check().catch(console.error);
