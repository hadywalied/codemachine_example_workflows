export default {
    name: 'Spec-Driven Development',
    controller: true,
    specification: false,

    tracks: {
        question: 'What are we working on?',
        options: {
            new_project: {
                label: 'New Project',
                description: 'Build something from scratch'
            },
            existing_app: {
                label: 'Existing App',
                description: 'Add features or modify existing code'
            },
            refactor: {
                label: 'Refactor',
                description: 'Improve existing code structure without adding features'
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
        separator("∴ Discovery Phase ∴"),
        resolveStep('spec-po', {}),
        resolveStep('spec-analyst', {}),

        separator("∴ Design Phase ∴"),
        resolveStep('spec-architect', {}),
        resolveStep('spec-api-designer', {}),

        separator("∴ Implementation Phase ∴"),
        resolveStep('spec-setup', {}),
        resolveStep('spec-impl-orchestrator', {}),

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
