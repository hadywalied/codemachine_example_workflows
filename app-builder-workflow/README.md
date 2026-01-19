# App Builder Workflow

> A simple, conversational workflow to build apps with CodeMachine.

## What This Demonstrates

| Feature | How It's Used |
|---------|---------------|
| **Interactive agents** | PO asks questions, you respond |
| **Autonomous agents** | Architect, Setup, Developer run automatically |
| **User checkpoint** | Review specs before coding starts |
| **Sub-agents** | Parallel code generation (UI, Logic, Tests) |
| **Fix loop** | Tester finds issues → Developer fixes → Re-test |

## Structure

```
app-builder-workflow/
├── codemachine.json              # Package manifest
├── config/
│   ├── main.agents.js            # Main agents
│   └── sub.agents.js             # Sub-agents for code gen
├── prompts/templates/app-builder/
│   ├── po.md                     # Product Owner
│   ├── architect.md              # Technical Architect
│   ├── setup.md                  # Project Scaffolding
│   ├── developer.md              # Code Generation Orchestrator
│   ├── tester.md                 # Validation & Fix Loop
│   └── sub-agents/
│       ├── ui.md                 # Components & Pages
│       ├── logic.md              # Hooks & State
│       └── tests.md              # Test Files
└── templates/workflows/
    └── app-builder.workflow.js   # Workflow Definition
```

## Installation

```bash
codemachine import github.com/moazbuilds/codemachine-workflows/app-builder-workflow
```

## Workflow

```
1. PO (Interactive)      → Gather requirements & tech decisions
   ↓
2. Architect (Auto)      → Create technical spec
   ↓
3. Checkpoint            → User reviews spec
   ↓
4. Setup (Auto)          → Scaffold project
   ↓
5. Developer (Auto)      → Generate code via sub-agents
   ↓
6. Tester (Auto + Loop)  → Validate, fix if needed
   ↓
Done!
```

## Usage

```bash
cd your-project-directory
codemachine start
# Select "App Builder"
```

The PO will greet you and start a conversation to understand what you want to build.
