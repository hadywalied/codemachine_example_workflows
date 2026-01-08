const path = require('node:path');

const promptsDir = path.join(__dirname, '..', 'prompts', 'templates', 'app-builder', 'sub-agents');

const appBuilderSubAgents = [
    {
        id: 'ab-ui',
        name: 'UI Developer',
        description: 'Generates components and pages',
        mirrorPath: path.join(promptsDir, 'ui.md'),
    },
    {
        id: 'ab-logic',
        name: 'Logic Developer',
        description: 'Generates hooks, state, and utilities',
        mirrorPath: path.join(promptsDir, 'logic.md'),
    },
    {
        id: 'ab-tests',
        name: 'Test Developer',
        description: 'Generates test files',
        mirrorPath: path.join(promptsDir, 'tests.md'),
    },
];

module.exports = appBuilderSubAgents;
