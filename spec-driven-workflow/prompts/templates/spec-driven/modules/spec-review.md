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

---

## MANDATORY: Directive File Output

**CRITICAL:** You **MUST** write to `.codemachine/memory/directive.json`. The workflow ONLY reads this file - chat messages are NOT detected.

**For successful completion:**
```json
{
  "action": "complete",
  "reason": "All validations passed after {N} iterations"
}
```

**To loop back and fix issues:**
```json
{
  "action": "loop",
  "reason": "Found {N} issues, returning to implementation"
}
```

**For escalation (max iterations reached):**
```json
{
  "action": "checkpoint",
  "reason": "Maximum iterations reached. {N} issues remaining. User intervention required."
}
```

**REMEMBER:** Only two fields: `action` and `reason`. You MUST write this file.

{error_escalation}

