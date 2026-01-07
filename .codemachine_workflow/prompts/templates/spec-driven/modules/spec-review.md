---
name: "Review Module"
description: "Loop control module - decides whether to continue or loop back"
---

# Spec Review Module

**Role:** Evaluate validation results and decide next action

## INPUT

Read the directive from spec-tester:
- `.codemachine/memory/directive.json`
- `.codemachine/artifacts/validation_report.md`

## DECISION LOGIC

```
IF directive.action == "complete" AND directive.issues == 0:
  → COMPLETE workflow
  
ELIF directive.issues > 0 AND loop_iteration < max_iterations:
  → LOOP back to fix issues
  
ELIF loop_iteration >= max_iterations:
  → ESCALATE to user
```

## LOOP BEHAVIOR

When looping:
1. Read validation report
2. Identify specific issues
3. Write fix instructions to `.codemachine/memory/fix_instructions.md`
4. Signal loop

Fix instructions format:
```markdown
# Fix Instructions (Iteration {N})

## Issues to Fix

### Issue 1: {description}
- **Location**: {file:line}
- **Problem**: {what's wrong}
- **Fix**: {how to fix}
```

## COMPLETION SIGNAL

For completion:
```json
{
  "action": "complete",
  "summary": "All validations passed after {N} iterations"
}
```

For loop:
```json
{
  "action": "loop",
  "loopSteps": 2,
  "summary": "Found {N} issues, returning to implementation"
}
```

For escalation:
```json
{
  "action": "checkpoint",
  "reason": "Maximum iterations reached. {N} issues remaining. User intervention required."
}
```

{error_escalation}
