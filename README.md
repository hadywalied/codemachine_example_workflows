# CodeMachine Workflow Examples

Example workflows for [CodeMachine](https://github.com/moazbuilds/CodeMachine-CLI).

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

## Installation

### Prerequisites

- [CodeMachine CLI](https://github.com/moazbuilds/CodeMachine-CLI) installed
- Node.js 18+

### Import a Workflow

```bash
# Import App Builder workflow
codemachine import https://github.com/hadywalied/codemachine_example_workflows/app-builder-workflow

# Import Spec-Driven workflow
codemachine import https://github.com/hadywalied/codemachine_example_workflows/spec-driven-workflow
```

---

## Usage

After importing:

```bash
cd your-project-directory
codemachine start
```

Select the imported workflow from the menu.

---

## Workflow Structure

Each workflow follows the CodeMachine package convention:

```
workflow-name/
├── codemachine.json      # Package manifest (name, version)
├── config/
│   ├── main.agents.js    # Main agent definitions
│   ├── sub.agents.js     # Sub-agent definitions (optional)
│   └── modules.js        # Reusable modules (optional)
├── prompts/templates/    # Agent prompt files
└── templates/workflows/  # Workflow definition files
```

---

## Creating Custom Workflows

Use these examples as templates for your own workflows. Key components:

1. **Package Manifest** (`codemachine.json`)
   - Required `name` and `version` fields
   - Optional `description` and custom `paths`

2. **Workflow Definition** (`templates/workflows/*.workflow.js`)
   - Define steps, tracks, and sub-agents
   - Configure interactive vs autonomous agents

3. **Agent Prompts** (`prompts/templates/*/`)
   - Define agent personality and behavior
   - Specify input files and output artifacts

4. **Agent Configuration** (`config/main.agents.js`)
   - Register agents with IDs and prompt paths
   - Configure role (controller, sub-agent, etc.)
