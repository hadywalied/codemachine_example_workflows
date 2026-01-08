#!/bin/bash
# install.sh - Install App Builder workflow to CodeMachine
set -e

# Detect CodeMachine version
if command -v codemachine &> /dev/null; then
    CM_VERSION=$(codemachine --version 2>/dev/null | head -1 | grep -oE '[0-9]+\.[0-9]+\.[0-9]+' || echo "0.8.0")
else
    CM_VERSION="0.8.0"
fi

CM_DIR="$HOME/.codemachine/resources/$CM_VERSION"

if [ ! -d "$CM_DIR" ]; then
    echo "❌ CodeMachine not found at: $CM_DIR"
    echo "   Install CodeMachine first, then run this script."
    exit 1
fi

echo "📦 Installing App Builder Workflow"
echo "   Target: $CM_DIR"
echo ""

# 1. Copy prompts
echo "📝 Copying prompts..."
mkdir -p "$CM_DIR/prompts/templates/app-builder/sub-agents"
cp -r prompts/templates/app-builder/* "$CM_DIR/prompts/templates/app-builder/"
echo "   ✅ Prompts installed"

# 2. Copy workflow
echo "📋 Copying workflow..."
cp templates/workflows/app-builder.workflow.js "$CM_DIR/templates/workflows/"
echo "   ✅ Workflow installed"

# 3. Copy agent configs
echo "⚙️  Installing agents..."
cp config/app-builder.agents.js "$CM_DIR/config/"
cp config/app-builder.sub-agents.js "$CM_DIR/config/"

# 4. Append to existing main.agents.js
if ! grep -q "app-builder.agents" "$CM_DIR/config/main.agents.js" 2>/dev/null; then
    cat >> "$CM_DIR/config/main.agents.js" << 'EOF'

// App Builder Workflow Agents
const appBuilderAgents = require('./app-builder.agents.js');
module.exports = [...module.exports, ...appBuilderAgents];
EOF
    echo "   ✅ Main agents registered"
else
    echo "   ⚠️  Agents already registered"
fi

# 5. Append to existing sub.agents.js
if ! grep -q "app-builder.sub-agents" "$CM_DIR/config/sub.agents.js" 2>/dev/null; then
    cat >> "$CM_DIR/config/sub.agents.js" << 'EOF'

// App Builder Sub-Agents
const appBuilderSubAgents = require('./app-builder.sub-agents.js');
module.exports = [...module.exports, ...appBuilderSubAgents];
EOF
    echo "   ✅ Sub-agents registered"
else
    echo "   ⚠️  Sub-agents already registered"
fi

echo ""
echo "✅ Installation complete!"
echo ""
echo "To use:"
echo "  1. cd to your project directory"
echo "  2. codemachine start"
echo "  3. Select 'App Builder'"
