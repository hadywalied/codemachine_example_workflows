const path = require('node:path');

// ═══════════════════════════════════════════════════════════════════════════
// SPEC-DRIVEN WORKFLOW AGENTS
// 
// INSTALLATION: Append these agents to your existing main.agents.js
// DO NOT REPLACE the existing file - add these at the end!
// ═══════════════════════════════════════════════════════════════════════════

// Resolve prompts directory relative to CodeMachine resources root
// When installed to ~/.codemachine/resources/0.8.0/, this resolves to:
// ~/.codemachine/resources/0.8.0/prompts/templates/spec-driven/
const promptsDir = path.join(__dirname, '..', 'prompts', 'templates', 'spec-driven');

const specDrivenAgents = [
    // ───────────────────────────────────────────────────────────
    // Controller (PO)
    // ───────────────────────────────────────────────────────────
    {
        id: 'spec-po',
        name: 'Hady [PO]',
        description: 'Product Owner & Spec-Driven Calibration Specialist',
        role: 'controller',
        promptPath: path.join(promptsDir, 'spec-po.md'),
    },

    // ───────────────────────────────────────────────────────────
    // Discovery Phase
    // ───────────────────────────────────────────────────────────
    {
        id: 'spec-analyst',
        name: 'Moaz [Analyst]',
        description: 'Requirements discovery through conversation',
        promptPath: path.join(promptsDir, 'spec-analyst.md'),
        chainedPromptsPath: path.join(promptsDir, 'spec-analyst-chained'),
    },

    // ───────────────────────────────────────────────────────────
    // Design Phase  
    // ───────────────────────────────────────────────────────────
    {
        id: 'spec-architect',
        name: 'Atef [Architect]',
        description: 'Technical architecture design from specs',
        promptPath: path.join(promptsDir, 'spec-architect.md'),
    },
    {
        id: 'spec-api-designer',
        name: 'Essam [API]',
        description: 'OpenAPI specification generation',
        promptPath: path.join(promptsDir, 'spec-api-designer.md'),
    },

    // ───────────────────────────────────────────────────────────
    // Implementation Phase
    // ───────────────────────────────────────────────────────────
    {
        id: 'spec-setup',
        name: 'Setup',
        description: 'Project scaffolding and initialization',
        promptPath: path.join(promptsDir, 'spec-setup.md'),
    },
    {
        id: 'spec-impl-orchestrator',
        name: 'Orchestrator',
        description: 'Coordinates parallel code generation',
        promptPath: path.join(promptsDir, 'spec-impl-orchestrator.md'),
    },

    // ───────────────────────────────────────────────────────────
    // Review Phase
    // ───────────────────────────────────────────────────────────
    {
        id: 'spec-tester',
        name: 'Tester',
        description: 'Validates implementation against specs',
        promptPath: path.join(promptsDir, 'spec-tester.md'),
    },
];

// Export for use in main.agents.js:
// Add this at the end of your main.agents.js:
//   const specDrivenAgents = require('./spec-driven.agents.js');
//   module.exports = [...existingAgents, ...specDrivenAgents];
module.exports = specDrivenAgents;
