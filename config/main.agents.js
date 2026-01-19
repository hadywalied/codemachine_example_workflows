const path = require('node:path');

const promptsDir = path.join(__dirname, '..', 'prompts', 'templates');

module.exports = [
  // ═══════════════════════════════════════════════════════════════════════════
  // APP BUILDER WORKFLOW AGENTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'ab-po',
    name: 'PO',
    description: 'Gathers requirements through conversation',
    role: 'controller',
    promptPath: path.join(promptsDir, 'app-builder', 'po.md'),
  },
  {
    id: 'ab-architect',
    name: 'Architect',
    description: 'Creates technical specification',
    promptPath: path.join(promptsDir, 'app-builder', 'architect.md'),
  },
  {
    id: 'ab-setup',
    name: 'Setup',
    description: 'Scaffolds project structure',
    promptPath: path.join(promptsDir, 'app-builder', 'setup.md'),
  },
  {
    id: 'ab-developer',
    name: 'Developer',
    description: 'Orchestrates code generation via sub-agents',
    promptPath: path.join(promptsDir, 'app-builder', 'developer.md'),
  },
  {
    id: 'ab-tester',
    name: 'Tester',
    description: 'Validates and triggers fix loop if needed',
    promptPath: path.join(promptsDir, 'app-builder', 'tester.md'),
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SPEC-DRIVEN WORKFLOW AGENTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'spec-po',
    name: 'Hady [PO]',
    description: 'Product Owner & Spec-Driven Calibration Specialist',
    role: 'controller',
    promptPath: path.join(promptsDir, 'spec-driven', 'spec-po.md'),
  },
  {
    id: 'spec-analyst',
    name: 'Moaz [Analyst]',
    description: 'Requirements discovery through conversation',
    promptPath: path.join(promptsDir, 'spec-driven', 'spec-analyst.md'),
    chainedPromptsPath: path.join(promptsDir, 'spec-driven', 'spec-analyst-chained'),
  },
  {
    id: 'spec-architect',
    name: 'Atef [Architect]',
    description: 'Technical architecture design from specs',
    promptPath: path.join(promptsDir, 'spec-driven', 'spec-architect.md'),
  },
  {
    id: 'spec-api-designer',
    name: 'Essam [API]',
    description: 'OpenAPI specification generation',
    promptPath: path.join(promptsDir, 'spec-driven', 'spec-api-designer.md'),
  },
  {
    id: 'spec-setup',
    name: 'Setup',
    description: 'Project scaffolding and initialization',
    promptPath: path.join(promptsDir, 'spec-driven', 'spec-setup.md'),
  },
  {
    id: 'spec-impl-orchestrator',
    name: 'Orchestrator',
    description: 'Coordinates parallel code generation',
    promptPath: path.join(promptsDir, 'spec-driven', 'spec-impl-orchestrator.md'),
  },
  {
    id: 'spec-tester',
    name: 'Tester',
    description: 'Validates implementation against specs',
    promptPath: path.join(promptsDir, 'spec-driven', 'spec-tester.md'),
  },
];
