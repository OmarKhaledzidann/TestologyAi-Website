# Adding a New Course

## Steps

### 1. Add a logo image

Place your logo in `public/logos/` (e.g., `public/logos/kubernetes.png`).
- PNG preferred (for transparency)
- Square, ~200x200px or larger

### 2. Add certificate metadata

Edit `src/data/certificates.json` and add a new entry to the array:

```json
{
  "id": "kubernetes",
  "title": "Kubernetes Fundamentals",
  "description": "Learn container orchestration with Kubernetes.",
  "logo": "/logos/kubernetes.png",
  "chapters": ["all", "chapter-1", "chapter-2"]
}
```

- `id` — unique, lowercase, kebab-case
- `chapters` — **must always include `"all"` as the first entry**

### 3. Create chapter data file

Create `src/data/chapters/<cert-id>.json` (e.g., `src/data/chapters/kubernetes.json`):

```json
[
  {
    "id": "all",
    "title": "All Chapters",
    "practiceQuestions": [],
    "examQuestions": [
      {
        "id": "all-q1",
        "text": "What is the primary purpose of Kubernetes?",
        "options": [
          { "id": "a", "text": "Database management" },
          { "id": "b", "text": "Container orchestration" },
          { "id": "c", "text": "Web hosting" },
          { "id": "d", "text": "DNS resolution" }
        ],
        "correctAnswer": "b",
        "explanation": "Kubernetes is a container orchestration platform."
      }
    ]
  },
  {
    "id": "chapter-1",
    "title": "Basics",
    "practiceQuestions": [
      {
        "id": "ch1-pq1",
        "text": "What is a Pod?",
        "options": [
          { "id": "a", "text": "A storage volume" },
          { "id": "b", "text": "The smallest deployable unit" },
          { "id": "c", "text": "A cluster node" },
          { "id": "d", "text": "A networking interface" }
        ],
        "correctAnswer": "b",
        "explanation": "A Pod is the smallest deployable unit in Kubernetes."
      }
    ],
    "examQuestions": []
  }
]
```

**Rules:**
- The `"all"` chapter has only `examQuestions` (leave `practiceQuestions` as `[]`)
- Individual chapters can have both `practiceQuestions` and `examQuestions`
- Each question needs: `id`, `text`, `options` (4 options with ids a/b/c/d), `correctAnswer`, and optionally `explanation`
- Chapter IDs here must match the `chapters` array in `certificates.json`

### 4. Register the data in the data loader

Edit `src/utils/data.ts`:

1. Add the import at the top:

```typescript
import kubernetesChapters from "#/data/chapters/kubernetes.json";
```

2. Add an entry to `chaptersMap`:

```typescript
const chaptersMap: Record<string, Array<Chapter>> = {
  // ... existing entries ...
  "kubernetes": kubernetesChapters,
};
```

### 5. (Optional) Use the conversion script

If your questions are in a different format, you can use `convert-questions.cjs` to convert them into the required JSON structure.

### 6. Test it

```bash
npm run dev
```

1. Go to `/certificates` — verify the new course card appears
2. Click into it — verify chapters load
3. Test **practice mode** — answer questions, check results
4. Test **exam mode** — verify the 60-minute timer, shuffling, and scoring (80% to pass)

## Checklist

- [ ] Logo image added to `public/logos/`
- [ ] Certificate entry added to `src/data/certificates.json`
- [ ] Chapter JSON file created at `src/data/chapters/<cert-id>.json`
- [ ] Contains an `"all"` chapter with exam questions
- [ ] All chapter IDs match between `certificates.json` and the chapter file
- [ ] Import and `chaptersMap` entry added in `src/utils/data.ts`
- [ ] `npm run build` succeeds
- [ ] Practice and exam modes work correctly

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/data/certificates.json` | Certificate metadata (title, description, logo, chapter list) |
| `src/data/chapters/<id>.json` | Questions and chapters for each certificate |
| `src/types.ts` | TypeScript interfaces (`Certificate`, `Chapter`, `Question`, `Option`) |
| `src/utils/data.ts` | Data loading — imports chapter files and exposes getter functions |
| `convert-questions.cjs` | Helper script to convert question formats |
