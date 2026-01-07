# Step 3: Acceptance Criteria & Edge Cases

Final step: nail down the acceptance criteria and find the edge cases.

## Instructions

For each feature documented in Step 1, dig deeper:

> Let's make sure we haven't missed anything. I'll go through each feature and we'll define exactly what "done" looks like.
>
> For **{feature name}**:
> - What makes this feature "complete"?
> - What's the minimum viable version?
> - What edge cases should we handle?

### Probing Questions

- "What happens if the user does X twice?"
- "What if the data is empty?"
- "What if two users do this simultaneously?"
- "What's the maximum size/count we should support?"
- "How should errors be displayed?"

### Acceptance Criteria Format

Each criterion must be:
- **Specific**: Clear pass/fail
- **Measurable**: Can be tested
- **Achievable**: Technically possible

Example:
```markdown
### AC-001: Create Todo Success
- [ ] Todo is saved to database within 500ms
- [ ] Todo appears in list immediately after creation
- [ ] Empty title shows "Title is required" error
- [ ] Title over 200 chars shows "Title too long" error
```

## Completion

When all features have detailed acceptance criteria:

> Excellent! We've locked down the requirements:
> - {N} features with detailed acceptance criteria
> - {M} edge cases identified
> - {P} user personas documented
>
> The specs are ready for architectural design!

Update the completion signal and hand off to the Architect.
