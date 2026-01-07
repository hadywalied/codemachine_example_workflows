const path = require('node:path');

// ═══════════════════════════════════════════════════════════════════════════
// SPEC-DRIVEN MODULES
// 
// INSTALLATION: Append these modules to your existing modules.js
// DO NOT REPLACE the existing file - add these at the end!
// ═══════════════════════════════════════════════════════════════════════════

const promptsDir = path.join(__dirname, '..', 'prompts', 'templates', 'spec-driven');

const specDrivenModules = [
    {
        id: 'spec-review',
        name: 'Review Module',
        description: 'Loop control for validation',
        promptPath: path.join(promptsDir, 'modules', 'spec-review.md'),
        loopSteps: 2,
        loopMaxIterations: 5,
    },
];

module.exports = specDrivenModules;
