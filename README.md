# CodeMachine Example Workflows

Example workflows for [CodeMachine](https://github.com/moazbuilds/CodeMachine-CLI).

## Installation

```bash
codemachine import github.com/hadywalied/codemachine_example_workflows
```

## Available Workflows

### App Builder Workflow

A simple, conversational workflow to build React applications.

**Features:**
- Interactive Product Owner gathers requirements through conversation
- Technical Architect creates specifications
- Automatic project scaffolding with React + Vite + TypeScript
- Parallel code generation via sub-agents
- Automated testing and fix loops

**Workflow Steps:**
1. PO (Interactive) - Gather requirements through conversation
2. Architect (Auto) - Create technical specification
3. Checkpoint - User reviews spec before coding
4. Setup (Auto) - Scaffold project with React + Vite
5. Developer (Auto) - Generate code via sub-agents
6. Tester (Auto + Loop) - Validate and fix issues

---

### Spec-Driven Development Workflow

A more comprehensive workflow with detailed specifications.

**Workflow Steps:**
1. Discovery Phase: PO and Analyst gather requirements
2. Design Phase: Architect and API Designer create specifications
3. Implementation: Orchestrator coordinates parallel code generation
4. Review Loop: Tester validates, Review module triggers fixes

---

## Usage

After importing:

```bash
cd your-project-directory
codemachine start
```

Select the workflow from the menu.

---

## Structure

```
codemachine_example_workflows/
├── codemachine.json              # Package manifest
├── config/
│   ├── main.agents.js            # All agent definitions
│   ├── sub.agents.js             # Sub-agent definitions
│   └── modules.js                # Reusable modules
├── prompts/templates/
│   ├── app-builder/              # App Builder prompts
│   └── spec-driven/              # Spec-Driven prompts
├── templates/workflows/
│   ├── app-builder.workflow.js   # App Builder workflow
│   └── spec-driven.workflow.js   # Spec-Driven workflow
│
├── app-builder-workflow/         # Standalone package (for local import)
└── spec-driven-workflow/         # Standalone package (for local import)
```

---

## Creating Custom Workflows

Use these examples as templates. Key components:

1. **Package Manifest** (`codemachine.json`) - name and version
2. **Agents** (`config/main.agents.js`) - agent definitions with prompt paths
3. **Prompts** (`prompts/templates/`) - agent behavior and instructions
4. **Workflows** (`templates/workflows/*.workflow.js`) - step definitions
