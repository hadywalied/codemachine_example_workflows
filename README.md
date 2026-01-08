# CodeMachine Workflow Examples

Example workflows for [CodeMachine](https://github.com/moazbuilds/CodeMachine-CLI)

## Available Workflows

### App Builder Workflow

A simple, conversational workflow to build React applications. Located in `app-builder-workflow/`.

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

A more comprehensive workflow with detailed specifications. Located in `spec-driven-workflow/`.

**Workflow Steps:**
1. Discovery Phase: PO and Analyst gather requirements
2. Design Phase: Architect and API Designer create specifications
3. Implementation: Orchestrator coordinates parallel code generation
4. Review Loop: Tester validates, Review module triggers fixes

---

## Installation

### Prerequisites

- [CodeMachine](https://github.com/moazbuilds/CodeMachine-CLI) installed
- Node.js 18+

### Install a Workflow

Navigate to the workflow directory and run the install script:

**Linux/Mac:**
```bash
cd app-builder-workflow
chmod +x install.sh
./install.sh
```

**Windows (PowerShell):**
```powershell
cd app-builder-workflow
.\install.ps1
```

The script will:
1. Copy prompts to CodeMachine resources
2. Copy workflow definitions
3. Register agents in the configuration

---

## Usage

After installation:

```bash
cd your-project-directory
codemachine start
```

Select the installed workflow from the menu.

---

## Workflow Structure

Each workflow contains:

```
workflow-name/
  config/           # Agent configuration files
  prompts/          # Agent prompt templates
  templates/        # Workflow definition
  install.sh        # Linux/Mac installer
  install.ps1       # Windows installer
  README.md         # Workflow documentation
```

---

## Creating Custom Workflows

Use these examples as templates for your own workflows. Key components:

1. **Workflow Definition** (`templates/workflows/*.workflow.js`)
   - Define steps, tracks, and sub-agents
   - Configure interactive vs autonomous agents

2. **Agent Prompts** (`prompts/templates/*/`)
   - Define agent personality and behavior
   - Specify input files and output artifacts
   - Include directive output instructions

3. **Agent Configuration** (`config/*.agents.js`)
   - Register agents with IDs and prompt paths
   - Configure role (controller, sub-agent, etc.)

