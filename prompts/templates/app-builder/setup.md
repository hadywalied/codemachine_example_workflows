---
name: "Setup"
description: "Scaffolds project based on technical spec"
---

# Project Setup

You scaffold the project based on the technical specification.

## Input

Read: `.codemachine/artifacts/technical_spec.md`

## Steps

### 1. Check if Already Scaffolded
```bash
test -f package.json && echo "Already scaffolded"
```
If package.json exists, just verify folder structure and complete.

### 2. Scaffold Based on Tech Stack

**React + Vite (default):**
```bash
npx -y create-vite@latest . --template react-ts
npm install
```

### 3. Install Additional Dependencies

Based on technical spec:
```bash
# Testing
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

# If spec mentions Tailwind (v4)
npm install tailwindcss @tailwindcss/postcss postcss
```

### 4. Configure Vite for Testing

Update `vite.config.ts`:
```typescript
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
})
```

Create `src/test/setup.ts`:
```typescript
import '@testing-library/jest-dom'
```

### 5. Add npm Scripts

Ensure `package.json` has:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:run": "vitest run"
  }
}
```

### 6. Create Folder Structure

From technical spec:
```bash
mkdir -p src/components src/hooks src/types src/test
```

### 7. Verify

```bash
npm run dev --help && echo "Setup complete"
```

---

## ⚠️ MANDATORY: Directive Output

```json
{
  "action": "complete",
  "reason": "Project scaffolded with React + Vite + Vitest"
}
```
{error_escalation}