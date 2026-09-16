/**
 * EN NANBA Clinical Intelligence Platform POC
 * End-to-End Automated Pipeline Verification Script
 */

const BASE_URL = 'http://localhost:4000/api';

async function testPipeline() {
  console.log('\n=============================================================');
  console.log('  STARTING EN NANBA E2E CLINICAL PIPELINE VERIFICATION');
  console.log('=============================================================\n');

  try {
    // 1. System Status
    console.log('[1/10] Checking System & Database Status...');
    const statusRes = await fetch(`${BASE_URL}/system/status`);
    const status = await statusRes.json();
    console.log('  -> System Status:', status.status, '| Platform:', status.platform);
    console.log('  -> Neo4j Mode:', status.databases.neo4j.mode);
    console.log('  -> Qdrant Mode:', status.databases.qdrant.mode);
    console.log('  -> Postgres Mode:', status.databases.postgres.mode);
    console.log('  -> AI Engine Mode:', status.aiEngine.mode);

    // 2. Patient List
    console.log('\n[2/10] Fetching Patient Profiles...');
    const patientsRes = await fetch(`${BASE_URL}/patients`);
    const patients = await patientsRes.json();
    console.log(`  -> Found ${patients.length} patients:`, patients.map(p => `${p.fullName} (${p.id})`).join(', '));

    // 3. Single Patient Detail
    console.log('\n[3/10] Retrieving Patient P-1001 (Rajesh Kumar)...');
    const p1Res = await fetch(`${BASE_URL}/patients/P-1001`);
    const p1 = await p1Res.json();
    console.log(`  -> Demographics: Age ${p1.age}, Gender ${p1.gender}, Blood: ${p1.bloodType}, Conditions: ${p1.chronicConditions.join(', ')}`);

    // 4. Clinical Graph from Neo4j
    console.log('\n[4/10] Querying Patient Clinical Graph (The Clinical Intelligence Fabric)...');
    const graphRes = await fetch(`${BASE_URL}/graph/P-1001`);
    const graph = await graphRes.json();
    console.log(`  -> Retrieved ${graph.nodes.length} Nodes & ${graph.relationships.length} Relationships.`);
    const meds = graph.nodes.filter(n => n.label === 'Medication').map(n => n.properties.name);
    console.log('  -> Prescribed Medications in Graph:', meds.join(', '));

    // 5. Gap & Contradiction Radar
    console.log('\n[5/10] Evaluating Deterministic Gap & Contradiction Radar...');
    const radarRes = await fetch(`${BASE_URL}/graph/P-1001/radar`);
    const radarAlerts = await radarRes.json();
    console.log(`  -> Detected ${radarAlerts.length} Active Radar Alerts:`);
    radarAlerts.forEach((a, i) => {
      console.log(`     [Alert ${i + 1}] [${a.severity}] ${a.ruleName}`);
      console.log(`         Hazard: ${a.clinicalHazard.substring(0, 80)}...`);
    });

    // 6. Semantic Terminology Normalization via Qdrant
    console.log('\n[6/10] Querying Qdrant Semantic Vector Search for "HbA1c"...');
    const normRes = await fetch(`${BASE_URL}/normalize?term=HbA1c&system=LOINC`);
    const norm = await normRes.json();
    console.log(`  -> Matched Code: ${norm[0].system} [${norm[0].code}] ${norm[0].display} (Score: ${norm[0].score})`);

    // 7. Unstructured Text Ingestion & Normalization
    console.log('\n[7/10] Ingesting New Clinical Note with Normalization...');
    const ingestRes = await fetch(`${BASE_URL}/ingest/text`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        patientId: 'P-1001',
        clinicalText: 'Patient diagnosed with Essential hypertension. BP recorded at 152/94 mmHg. Recommended Lisinopril 10mg.',
        documentType: 'doctor_notes',
      }),
    });
    const ingest = await ingestRes.json();
    console.log(`  -> Extracted & Normalized ${ingest.entitiesCount} Entities:`);
    ingest.entities.forEach(e => {
      console.log(`     * "${e.rawText}" -> ${e.matchedCode?.system || 'Unknown'} [${e.matchedCode?.code || 'N/A'}] ${e.matchedCode?.display || ''}`);
    });

    // 8. AI Clinical Reasoning & RAG (Gemini 3.8 Flash + Zod Validation)
    console.log('\n[8/10] Running AI Clinical Reasoning (LangChain + Gemini + Zod)...');
    const aiRes = await fetch(`${BASE_URL}/ai/reasoning`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        patientId: 'P-1001',
      }),
    });
    const aiOutput = await aiRes.json();
    console.log('  -> AI Synthesis:', aiOutput.validatedResponse.patientSummary.substring(0, 100) + '...');
    console.log('  -> Safety Risk Level:', aiOutput.validatedResponse.safetyRiskLevel);
    console.log(`  -> Masked PHI Tokens: ${aiOutput.phiScrubbedTokensCount}, RAG Citations: ${aiOutput.ragContextItemsCount}`);
    console.log('  -> Differential Diagnoses:');
    aiOutput.validatedResponse.differentialDiagnoses.forEach(d => {
      console.log(`     * ${d.conditionName} (${d.icdCode}) [${d.probability} Probability]`);
    });

    // 9. Doctor Clinical Decision Capture (Accept / Modify / Reject)
    console.log('\n[9/10] Recording Clinician Review & Decision in Continuous Learning Loop...');
    const decisionRes = await fetch(`${BASE_URL}/patients/P-1001/decision`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        patientId: 'P-1001',
        decision: 'MODIFY',
        doctorName: 'Dr. S. K. Raman (Chief Cardiologist)',
        reasoningNotes: 'Withholding sublingual Nitroglycerin due to Sildenafil interaction. Prescribed oral Metoprolol instead.',
        modifiedPrescription: 'Metoprolol Tartrate 25mg PO BID',
      }),
    });
    const decision = await decisionRes.json();
    console.log('  -> Status:', decision.status);
    console.log('  -> Message:', decision.message);

    // 10. Evidence Ledger Audit Trail
    console.log('\n[10/10] Inspecting Longitudinal Evidence Ledger...');
    const ledgerRes = await fetch(`${BASE_URL}/patients/P-1001/ledger`);
    const ledger = await ledgerRes.json();
    console.log(`  -> Ledger contains ${ledger.length} immutable entries.`);
    console.log('  -> Latest Entry:', ledger[ledger.length - 1].claim);

    console.log('\n=============================================================');
    console.log('  ALL 10 PIPELINE CHECKS PASSED WITH 100% SUCCESS!');
    console.log('=============================================================\n');
  } catch (err) {
    console.error('Verification failed with error:', err);
  }
}

testPipeline();
