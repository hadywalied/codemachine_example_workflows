const path = require('node:path');

// Resolve prompts directory
const promptsDir = path.join(__dirname, '..', 'prompts', 'templates', 'app-builder');

const appBuilderAgents = [
    // ───────────────────────────────────────────────────────────
    // PO - Interactive Product Owner
    // ───────────────────────────────────────────────────────────
    {
        id: 'ab-po',
        name: 'PO',
        description: 'Gathers requirements through conversation',
        role: 'controller',
        promptPath: path.join(promptsDir, 'po.md'),
    },

    // ───────────────────────────────────────────────────────────
    // Architect - Technical Design
    // ───────────────────────────────────────────────────────────
    {
        id: 'ab-architect',
        name: 'Architect',
        description: 'Creates technical specification',
        promptPath: path.join(promptsDir, 'architect.md'),
    },

    // ───────────────────────────────────────────────────────────
    // Setup - Project Scaffolding
    // ───────────────────────────────────────────────────────────
    {
        id: 'ab-setup',
        name: 'Setup',
        description: 'Scaffolds project structure',
        promptPath: path.join(promptsDir, 'setup.md'),
    },

    // ───────────────────────────────────────────────────────────
    // Developer - Code Generation Orchestrator
    // ───────────────────────────────────────────────────────────
    {
        id: 'ab-developer',
        name: 'Developer',
        description: 'Orchestrates code generation via sub-agents',
        promptPath: path.join(promptsDir, 'developer.md'),
    },

    // ───────────────────────────────────────────────────────────
    // Tester - Validation & Fix Loop
    // ───────────────────────────────────────────────────────────
    {
        id: 'ab-tester',
        name: 'Tester',
        description: 'Validates and triggers fix loop if needed',
        promptPath: path.join(promptsDir, 'tester.md'),
    },
];

module.exports = appBuilderAgents;
