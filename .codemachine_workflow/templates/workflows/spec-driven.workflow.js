export default {
    name: 'Spec-Driven Development',
    controller: true,
    specification: false,

    tracks: {
        question: 'What type of application are you building?',
        options: {
            api: {
                label: 'API Only',
                description: 'Backend REST API without UI'
            },
            fullstack: {
                label: 'Full-Stack',
                description: 'Complete application with UI and API'
            },
        },
    },

    conditionGroups: [
        {
            id: 'features',
            question: 'What features does your project have?',
            multiSelect: true,
            conditions: {
                has_ui: {
                    label: 'Has UI',
                    description: 'Project includes a user interface'
                },
                has_auth: {
                    label: 'Has Authentication',
                    description: 'Project requires user authentication'
                },
                has_db: {
                    label: 'Has Database',
                    description: 'Project requires data persistence'
                },
            },
        },
    ],

    steps: [
        // ════════════════════════════════════════════
        // DISCOVERY PHASE - Interactive spec gathering
        // ════════════════════════════════════════════
        separator("∴ Discovery Phase ∴"),
        resolveStep('spec-po', {}),
        resolveStep('spec-analyst', {}),

        // ════════════════════════════════════════════
        // DESIGN PHASE - Architecture & API design
        // ════════════════════════════════════════════
        separator("∴ Design Phase ∴"),
        resolveStep('spec-architect', {}),
        resolveStep('spec-api-designer', {}),

        // ════════════════════════════════════════════
        // IMPLEMENTATION PHASE - Parallel code generation
        // ════════════════════════════════════════════
        separator("∴ Implementation Phase ∴"),
        resolveStep('spec-impl-orchestrator', {}),

        // ════════════════════════════════════════════
        // REVIEW LOOP - Test and iterate
        // ════════════════════════════════════════════
        separator("⟲ Review Loop ⟲"),
        resolveStep('spec-tester', { interactive: false }),
        resolveModule('spec-review', { interactive: false, loopSteps: 2 }),
    ],

    // Sub-agents for parallel code generation
    subAgentIds: [
        'spec-dev-data',
        'spec-dev-api',
        'spec-dev-ui',
        'spec-dev-tests',
    ],
};
