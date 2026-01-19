const path = require('node:path');

const promptsDir = path.join(__dirname, '..', 'prompts', 'templates');

module.exports = [
  // ═══════════════════════════════════════════════════════════════════════════
  // APP BUILDER SUB-AGENTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'ab-ui',
    name: 'UI Developer',
    description: 'Generates components and pages',
    mirrorPath: path.join(promptsDir, 'app-builder', 'sub-agents', 'ui.md'),
  },
  {
    id: 'ab-logic',
    name: 'Logic Developer',
    description: 'Generates hooks, state, and utilities',
    mirrorPath: path.join(promptsDir, 'app-builder', 'sub-agents', 'logic.md'),
  },
  {
    id: 'ab-tests',
    name: 'Test Developer',
    description: 'Generates test files',
    mirrorPath: path.join(promptsDir, 'app-builder', 'sub-agents', 'tests.md'),
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SPEC-DRIVEN SUB-AGENTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'spec-dev-data',
    name: 'Data Developer',
    description: 'Generates models and schemas',
    mirrorPath: path.join(promptsDir, 'spec-driven', 'sub-agents', 'spec-dev-data.md'),
  },
  {
    id: 'spec-dev-api',
    name: 'API Developer',
    description: 'Generates routes and handlers',
    mirrorPath: path.join(promptsDir, 'spec-driven', 'sub-agents', 'spec-dev-api.md'),
  },
  {
    id: 'spec-dev-ui',
    name: 'UI Developer',
    description: 'Generates components and pages',
    mirrorPath: path.join(promptsDir, 'spec-driven', 'sub-agents', 'spec-dev-ui.md'),
  },
  {
    id: 'spec-dev-tests',
    name: 'Test Developer',
    description: 'Generates tests from specs',
    mirrorPath: path.join(promptsDir, 'spec-driven', 'sub-agents', 'spec-dev-tests.md'),
  },
];
