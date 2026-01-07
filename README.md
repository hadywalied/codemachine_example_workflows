# Spec-Driven Development Workflow

> Build applications from specifications through interactive agent conversations.

## 🚨 Important: Installation

**DO NOT simply copy files** - this will break other workflows!

Use the install script which properly **appends** agents to existing configs:

```bash
# Linux/Mac
cd .codemachine_workflow
chmod +x install.sh
./install.sh

# Windows (manual steps below)
```

### Windows Manual Installation

1. **Copy prompts** (safe - uses dedicated subfolder):
```powershell
$CM_DIR = "$HOME\.codemachine\resources\0.8.0"
Copy-Item -Recurse prompts\templates\spec-driven "$CM_DIR\prompts\templates\spec-driven"
```

2. **Copy workflow** (safe - unique filename):
```powershell
Copy-Item templates\workflows\spec-driven.workflow.js "$CM_DIR\templates\workflows\"
```

3. **Copy agent config files**:
```powershell
Copy-Item config\spec-driven.agents.js "$CM_DIR\config\"
Copy-Item config\spec-driven.sub-agents.js "$CM_DIR\config\"
Copy-Item config\spec-driven.modules.js "$CM_DIR\config\"
```

4. **Append to existing configs** - Add these lines to the end of each file:

**`$CM_DIR\config\main.agents.js`**:
```javascript
const specDrivenAgents = require('./spec-driven.agents.js');
module.exports = [...module.exports, ...specDrivenAgents];
```

**`$CM_DIR\config\sub.agents.js`**:
```javascript
const specDrivenSubAgents = require('./spec-driven.sub-agents.js');
module.exports = [...module.exports, ...specDrivenSubAgents];
```

**`$CM_DIR\config\modules.js`**:
```javascript
const specDrivenModules = require('./spec-driven.modules.js');
module.exports = [...module.exports, ...specDrivenModules];
```

---

## 🔄 Workflow Overview

```
Discovery Phase:     spec-po → spec-analyst
Design Phase:        spec-architect → spec-api-designer
Implementation:      orchestrator → [data] → [api & ui] → [tests]
Review Loop:         spec-tester ↔ spec-review
```

## 📁 Directory Structure

```
.codemachine_workflow/
├── install.sh                          # Installation script
├── config/
│   ├── spec-driven.agents.js           # Main agents (append to main.agents.js)
│   ├── spec-driven.sub-agents.js       # Sub-agents (append to sub.agents.js)
│   └── spec-driven.modules.js          # Modules (append to modules.js)
├── prompts/
│   └── templates/
│       └── spec-driven/                # All prompts in dedicated folder
│           ├── spec-po.md
│           ├── spec-analyst.md
│           ├── spec-analyst-chained/
│           ├── spec-architect.md
│           ├── spec-api-designer.md
│           ├── spec-impl-orchestrator.md
│           ├── spec-tester.md
│           ├── sub-agents/
│           └── modules/
└── templates/
    └── workflows/
        └── spec-driven.workflow.js     # Workflow definition
```

## 🚀 Usage

After installation:

```bash
cd your-project-directory
codemachine start
# Select "Spec-Driven Development"
```
