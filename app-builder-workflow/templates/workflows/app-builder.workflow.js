export default {
    name: 'App Builder',
    specification: false,  // Conversational flow, no spec file needed
    controller: true,

    // No tracks - keep it simple for onboarding
    // No conditionGroups - PO gathers all info conversationally

    steps: [
        // -----------------------------------------------------------------
        // PHASE 1: Discovery (Interactive)
        // -----------------------------------------------------------------
        separator("∴ Discovery ∴"),
        resolveStep('ab-po', { interactive: true }),

        // -----------------------------------------------------------------
        // PHASE 2: Design (Auto + Checkpoint)
        // -----------------------------------------------------------------
        separator("∴ Design ∴"),
        resolveStep('ab-architect', { interactive: false }),

        // User reviews the technical spec before we start coding
        // Architect writes checkpoint directive after producing spec

        // -----------------------------------------------------------------
        // PHASE 3: Build (Auto)
        // -----------------------------------------------------------------
        separator("∴ Build ∴"),
        resolveStep('ab-setup', { interactive: false }),
        resolveStep('ab-developer', { interactive: false }),

        // -----------------------------------------------------------------
        // PHASE 4: Validate + Fix Loop
        // -----------------------------------------------------------------
        separator("⟲ Validate ⟲"),
        resolveStep('ab-tester', { interactive: false, loopSteps: 1, loopMaxIterations: 3 }),
    ],

    // Sub-agents for parallel code generation
    subAgentIds: [
        'ab-ui',
        'ab-logic',
        'ab-tests',
    ],
};
