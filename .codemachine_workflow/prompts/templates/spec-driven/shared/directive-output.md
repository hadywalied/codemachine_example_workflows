## MANDATORY: Directive File Output

**CRITICAL:** At the end of your task, you **MUST** write to `.codemachine/memory/directive.json`. This is how the workflow knows you completed your task. Reporting in chat is NOT sufficient.

### Directive Format

The directive file must contain **exactly** these two fields:
```json
{
  "action": "<action_type>",
  "reason": "<brief explanation>"
}
```

### Available Actions

| Action | When to Use |
|--------|-------------|
| `"complete"` | Task finished successfully, proceed to next step |
| `"checkpoint"` | Need user review/approval before continuing |
| `"pause"` | Pause workflow, waiting for user input |
| `"loop"` | Need to retry or go back to previous steps |
| `"error"` | Critical error that blocks execution |

### Examples

**Successful completion:**
```json
{
  "action": "complete",
  "reason": "Created architecture document with 3 components and 5 entities"
}
```

**Need user review:**
```json
{
  "action": "checkpoint", 
  "reason": "Architecture ready for review. See .codemachine/artifacts/specs/02_architecture.md"
}
```

**Error escalation:**
```json
{
  "action": "error",
  "reason": "Cannot proceed: Required file 'specs/requirements.md' not found"
}
```

**REMEMBER:** You MUST write this file using your file write tool. The workflow ONLY reads directive.json to know your status.
