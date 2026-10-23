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
  const client = await pool.connect();
  try {
    const colRes = await client.query(
      "SELECT column_name FROM information_schema.columns WHERE table_name = 'patients';"
    );
    console.log('Columns in patients table:', colRes.rows.map(r => r.column_name));

    const vitals = {
      bmi: 22.5,
      heartRate: 72,
      bloodGlucose: "95 mg/dL",
      bloodPressure: "120/80 mmHg",
      oxygenSaturation: 99
    };

    const res = await client.query(
      `UPDATE patients 
       SET chronic_conditions = '[]'::jsonb,
           allergies = '[]'::jsonb,
           vitals = $1::jsonb,
           past_diseases = '[]'::jsonb,
           updated_at = NOW()
       WHERE id = 'P-1005'
       RETURNING id, full_name, chronic_conditions, allergies, vitals, past_diseases;`,
      [JSON.stringify(vitals)]
    );

    console.log('Successfully updated P-1005 in PostgreSQL:', res.rows[0]);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    client.release();
    await pool.end();
  }
}

main();
