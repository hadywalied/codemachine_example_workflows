const path = require('node:path');

const promptsDir = path.join(__dirname, '..', 'prompts', 'templates');

module.exports = [
  // ═══════════════════════════════════════════════════════════════════════════
  // SPEC-DRIVEN MODULES
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'spec-review',
    name: 'Review Module',
    description: 'Loop control for validation',
    promptPath: path.join(promptsDir, 'spec-driven', 'modules', 'spec-review.md'),
    loopSteps: 2,
    loopMaxIterations: 5,
  },
];
