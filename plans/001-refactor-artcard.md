# Plan 001: Extract ArtCard component and reduce duplication

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md` — unless a reviewer dispatched you and told you they
> maintain the index.
>
> **Drift check (run first)**: `git diff --stat 8fbad02..HEAD -- src/app/page.tsx`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: tech-debt
- **Planned at**: commit `8fbad02`, 2026-07-21

## Why this matters

`src/app/page.tsx` is over 760 lines long, mostly due to identical UI card structures being repeated dozens of times across 5 different carousel sections. Extracting this into a reusable `ArtCard` component and mapping over data arrays will dramatically reduce file size, making future styling or logic updates (like fixing images or adding links) require changing only a single component rather than 25 separate identical instances.

## Current state

- `src/app/page.tsx` — the main page containing all the duplicated carousels (lines 177-735).

Excerpt (example of a repeated block):

```tsx
                    <div className="flex flex-col items-start p-3">
                      <span className="text-lg leading-6 font-bold text-secondary">
                        Batman new 52
                      </span>
```

Repo conventions: Uses React functional components and Tailwind classes. Components generally go in `src/components/ui/` if they are primitive, but `src/components/` is fine for specific components like `ArtCard`. Let's use `src/components/ArtCard.tsx`.

## Commands you will need

| Purpose   | Command            | Expected on success |
| --------- | ------------------ | ------------------- |
| Typecheck | `npx tsc --noEmit` | exit 0, no errors   |

## Scope

**In scope**:

- `src/app/page.tsx`
- `src/components/ArtCard.tsx` (create)

**Out of scope**:

- Any modifications to shadcn UI components (`Carousel`, `Button`, etc.).

## Git workflow

- Branch: `advisor/001-refactor-artcard`
- Commit per step or per logical unit; message style: `refactor(page): extract ArtCard component`
- Do NOT push or open a PR unless the operator instructed it.

## Steps

### Step 1: Create `src/components/ArtCard.tsx`

Create a new file `src/components/ArtCard.tsx` exporting a functional component `ArtCard`. It should accept props: `imageUrl` (string), `title` (string), `artistName` (string), `artistAvatarUrl` (string), and `price` (string), and optional `isDarkOverlay` (boolean) to handle the gradient overlay. Move the card JSX from `page.tsx` into this component. Ensure it uses standard React imports and Tailwind CSS.

**Verify**: `npx tsc --noEmit` → exit 0, no errors

### Step 2: Refactor `src/app/page.tsx` to use `ArtCard` and data arrays

In `src/app/page.tsx`, define data arrays for each carousel section (e.g., `const NEW_IN_ARTWORKS = [...]`, `const PAINTING_ARTWORKS = [...]`). Map over these arrays inside the `<CarouselContent>` to render `<CarouselItem className="basis-1/4"><ArtCard ... /></CarouselItem>`. Replace all the hardcoded duplicated markup. Don't forget to import `ArtCard`.

**Verify**: `npx tsc --noEmit` → exit 0, no errors

## Test plan

- Visual inspection required (no automated tests present for UI components).
- Run `npm run dev` and ensure the page renders identical to before.

## Done criteria

- [ ] `npx tsc --noEmit` exits 0
- [ ] `grep -rn "Batman new 52" src/app/page.tsx` only matches the data array, not the duplicated JSX.
- [ ] No files outside the in-scope list are modified (`git status`)
- [ ] `plans/README.md` status row updated

## STOP conditions

Stop and report back (do not improvise) if:

- The structure of the cards varies significantly between sections in a way that prevents a single unified `ArtCard` component from working.

## Maintenance notes

- Future design tweaks to the cards should only touch `src/components/ArtCard.tsx`.
