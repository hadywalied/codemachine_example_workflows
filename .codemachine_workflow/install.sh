#!/bin/bash
# install.sh - Install spec-driven workflow to CodeMachine
# This script APPENDS agents to existing configs instead of replacing them

set -e

# Detect CodeMachine version and resources directory
if command -v codemachine &> /dev/null; then
    CM_VERSION=$(codemachine --version 2>/dev/null | head -1 | grep -oE '[0-9]+\.[0-9]+\.[0-9]+' || echo "0.8.0")
else
    CM_VERSION="0.8.0"
fi

CM_DIR="$HOME/.codemachine/resources/$CM_VERSION"

if [ ! -d "$CM_DIR" ]; then
    echo "❌ CodeMachine directory not found: $CM_DIR"
    echo "   Make sure CodeMachine is installed and run it at least once."
    exit 1
fi

echo "📦 Installing Spec-Driven Workflow to CodeMachine $CM_VERSION"
echo "   Target: $CM_DIR"
echo ""

# 1. Copy prompts to a dedicated subfolder (won't conflict)
echo "📝 Copying prompts..."
mkdir -p "$CM_DIR/prompts/templates/spec-driven"
cp -r prompts/templates/spec-driven/* "$CM_DIR/prompts/templates/spec-driven/"
echo "   ✅ Prompts installed to prompts/templates/spec-driven/"

# 2. Copy workflow (won't conflict - unique filename)
echo "📋 Copying workflow..."
cp templates/workflows/spec-driven.workflow.js "$CM_DIR/templates/workflows/"
echo "   ✅ Workflow installed to templates/workflows/"

# 3. Append agents to existing config files
echo "⚙️  Appending agents to config..."

# Backup existing configs
cp "$CM_DIR/config/main.agents.js" "$CM_DIR/config/main.agents.js.backup" 2>/dev/null || true
cp "$CM_DIR/config/sub.agents.js" "$CM_DIR/config/sub.agents.js.backup" 2>/dev/null || true
cp "$CM_DIR/config/modules.js" "$CM_DIR/config/modules.js.backup" 2>/dev/null || true

# Check if spec-driven agents are already installed
if grep -q "spec-po" "$CM_DIR/config/main.agents.js" 2>/dev/null; then
    echo "   ⚠️  Spec-driven agents already installed in main.agents.js"
else
    # Append to main.agents.js
    cat >> "$CM_DIR/config/main.agents.js" << 'AGENTS_EOF'

// ═══════════════════════════════════════════════════════════════
// SPEC-DRIVEN WORKFLOW AGENTS (auto-appended by install.sh)
// ═══════════════════════════════════════════════════════════════
const specDrivenAgents = require('./spec-driven.agents.js');
module.exports = [...module.exports, ...specDrivenAgents];
AGENTS_EOF
    cp config/spec-driven.agents.js "$CM_DIR/config/"
    echo "   ✅ Main agents appended"
fi

if grep -q "spec-dev-data" "$CM_DIR/config/sub.agents.js" 2>/dev/null; then
    echo "   ⚠️  Spec-driven sub-agents already installed"
else
    cat >> "$CM_DIR/config/sub.agents.js" << 'SUBAGENTS_EOF'

// SPEC-DRIVEN SUB-AGENTS (auto-appended by install.sh)
const specDrivenSubAgents = require('./spec-driven.sub-agents.js');
module.exports = [...module.exports, ...specDrivenSubAgents];
SUBAGENTS_EOF
    cp config/spec-driven.sub-agents.js "$CM_DIR/config/"
    echo "   ✅ Sub-agents appended"
fi

if grep -q "spec-review" "$CM_DIR/config/modules.js" 2>/dev/null; then
    echo "   ⚠️  Spec-driven modules already installed"
else
    cat >> "$CM_DIR/config/modules.js" << 'MODULES_EOF'

// SPEC-DRIVEN MODULES (auto-appended by install.sh)
const specDrivenModules = require('./spec-driven.modules.js');
module.exports = [...module.exports, ...specDrivenModules];
MODULES_EOF
    cp config/spec-driven.modules.js "$CM_DIR/config/"
    echo "   ✅ Modules appended"
fi

echo ""
echo "✅ Installation complete!"
echo ""
echo "To use the workflow:"
echo "  1. cd to your project directory"
echo "  2. Run: codemachine start"
echo "  3. Select 'Spec-Driven Development' workflow"
