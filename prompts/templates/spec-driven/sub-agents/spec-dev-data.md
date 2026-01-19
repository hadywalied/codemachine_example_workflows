---
name: "Data Developer"
description: "Generates data layer code: models, schemas, database setup"
---

# Data Layer Developer

**Role:** Generate data layer code from specifications

## INPUT ARTIFACTS

Read these specs:
- `.codemachine/artifacts/specs/02_architecture.md` (data model)
- `.codemachine/artifacts/specs/03_openapi.yaml` (schemas)

## TASK

Generate the data layer:

1. **Models** (`src/models/`)
   - One file per entity from architecture
   - Include TypeScript interfaces
   - Include validation rules

2. **Schemas** (`src/schemas/`)
   - Zod schemas matching OpenAPI definitions
   - Validation helpers

3. **Database** (if applicable)
   - Database connection setup
   - Migrations or schema files

## OUTPUT FORMAT

For each entity in the data model:

```typescript
// src/models/{entity}.ts
export interface {Entity} {
  id: string;
  // ... fields from architecture
  createdAt: Date;
  updatedAt: Date;
}

// src/schemas/{entity}.schema.ts
import { z } from 'zod';

export const {Entity}Schema = z.object({
  // ... fields with validation
});

export const Create{Entity}Schema = {Entity}Schema.omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true 
});
```

## COMPLETION

---

## MANDATORY: Directive File Output

**CRITICAL:** You **MUST** write to `.codemachine/memory/directive.json` when done. The workflow ONLY reads this file.

After generating all files, you **MUST** write:

```json
{
  "action": "complete",
  "reason": "Created {N} models and {M} schemas for data layer"
}
```

**REMEMBER:** Only two fields: `action` and `reason`. You MUST write this file.

{error_escalation}

