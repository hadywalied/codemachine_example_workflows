# install.ps1 - Install App Builder workflow to CodeMachine (Windows)
$ErrorActionPreference = "Stop"

$CM_VERSION = "0.8.0"
$CM_DIR = "$env:USERPROFILE\.codemachine\resources\$CM_VERSION"

if (-not (Test-Path $CM_DIR)) {
    Write-Error "CodeMachine not found at: $CM_DIR`nInstall CodeMachine first."
    exit 1
}

Write-Host "📦 Installing App Builder Workflow" -ForegroundColor Cyan
Write-Host "   Target: $CM_DIR"
Write-Host ""

# 1. Copy prompts
Write-Host "📝 Copying prompts..."
New-Item -ItemType Directory -Path "$CM_DIR\prompts\templates\app-builder\sub-agents" -Force | Out-Null
Copy-Item -Recurse -Force "prompts\templates\app-builder\*" "$CM_DIR\prompts\templates\app-builder\"
Write-Host "   ✅ Prompts installed" -ForegroundColor Green

# 2. Copy workflow
Write-Host "📋 Copying workflow..."
Copy-Item -Force "templates\workflows\app-builder.workflow.js" "$CM_DIR\templates\workflows\"
Write-Host "   ✅ Workflow installed" -ForegroundColor Green

# 3. Copy agent configs
Write-Host "⚙️  Installing agents..."
Copy-Item -Force "config\app-builder.agents.js" "$CM_DIR\config\"
Copy-Item -Force "config\app-builder.sub-agents.js" "$CM_DIR\config\"

# 4. Append to main.agents.js
$mainAgentsPath = "$CM_DIR\config\main.agents.js"
$mainAgentsContent = Get-Content $mainAgentsPath -Raw -ErrorAction SilentlyContinue
if ($mainAgentsContent -notmatch "app-builder.agents") {
    Add-Content $mainAgentsPath @"

// App Builder Workflow Agents
const appBuilderAgents = require('./app-builder.agents.js');
module.exports = [...module.exports, ...appBuilderAgents];
"@
    Write-Host "   ✅ Main agents registered" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  Agents already registered" -ForegroundColor Yellow
}

# 5. Append to sub.agents.js
$subAgentsPath = "$CM_DIR\config\sub.agents.js"
$subAgentsContent = Get-Content $subAgentsPath -Raw -ErrorAction SilentlyContinue
if ($subAgentsContent -notmatch "app-builder.sub-agents") {
    Add-Content $subAgentsPath @"

// App Builder Sub-Agents
const appBuilderSubAgents = require('./app-builder.sub-agents.js');
module.exports = [...module.exports, ...appBuilderSubAgents];
"@
    Write-Host "   ✅ Sub-agents registered" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  Sub-agents already registered" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "✅ Installation complete!" -ForegroundColor Green
Write-Host ""
Write-Host "To use:"
Write-Host "  1. cd to your project directory"
Write-Host "  2. codemachine start"
Write-Host "  3. Select 'App Builder'"
