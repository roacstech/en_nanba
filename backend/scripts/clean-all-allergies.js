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
    console.log('Sanitizing patient allergies in PostgreSQL...');
    
    // P-1003
    await client.query(`
      UPDATE patients 
      SET allergies = '["Penicillin (Severe Anaphylaxis Risk)"]'::jsonb
      WHERE id = 'P-1003';
    `);

    // P-1004
    await client.query(`
      UPDATE patients 
      SET allergies = '["Penicillin (Severe Anaphylaxis Risk)"]'::jsonb
      WHERE id = 'P-1004';
    `);

    // P-1006
    await client.query(`
      UPDATE patients 
      SET allergies = '["Aspirin", "Ibuprofen"]'::jsonb,
          chronic_conditions = '["Bronchial Asthma", "Allergic Rhinitis"]'::jsonb
      WHERE id = 'P-1006';
    `);

    console.log('All patient allergies and conditions cleaned in PostgreSQL!');
    const check = await client.query('SELECT id, full_name, chronic_conditions, allergies FROM patients;');
    console.log(check.rows);
  } catch (err) {
    console.error('Error cleaning allergies:', err);
  } finally {
    client.release();
    await pool.end();
  }
}

main();
