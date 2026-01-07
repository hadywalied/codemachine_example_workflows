const path = require('node:path');

// ═══════════════════════════════════════════════════════════════════════════
// SPEC-DRIVEN SUB-AGENTS
// 
// INSTALLATION: Append these agents to your existing sub.agents.js
// DO NOT REPLACE the existing file - add these at the end!
// ═══════════════════════════════════════════════════════════════════════════

const promptsDir = path.join(__dirname, '..', 'prompts', 'templates', 'spec-driven');

const specDrivenSubAgents = [
    {
        id: 'spec-dev-data',
        name: 'Data Developer',
        description: 'Generates models and schemas',
        mirrorPath: path.join(promptsDir, 'sub-agents', 'spec-dev-data.md'),
    },
    {
        id: 'spec-dev-api',
        name: 'API Developer',
        description: 'Generates routes and handlers',
        mirrorPath: path.join(promptsDir, 'sub-agents', 'spec-dev-api.md'),
    },
    {
        id: 'spec-dev-ui',
        name: 'UI Developer',
        description: 'Generates components and pages',
        mirrorPath: path.join(promptsDir, 'sub-agents', 'spec-dev-ui.md'),
    },
    {
        id: 'spec-dev-tests',
        name: 'Test Developer',
        description: 'Generates tests from specs',
        mirrorPath: path.join(promptsDir, 'sub-agents', 'spec-dev-tests.md'),
    },
];

module.exports = specDrivenSubAgents;
