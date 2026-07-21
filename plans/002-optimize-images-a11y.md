# Plan 002: Optimize images and improve accessibility

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md` — unless a reviewer dispatched you and told you they
> maintain the index.
>
> **Drift check (run first)**: `git diff --stat 8fbad02..HEAD -- src/app/page.tsx src/components/ArtCard.tsx`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: plans/001-refactor-artcard.md
- **Category**: perf, accessibility
- **Planned at**: commit `8fbad02`, 2026-07-21

## Why this matters

The page currently uses raw `<img>` tags and arbitrary Tailwind background images (`background-image`) for all visuals. This bypasses Next.js's built-in image optimization (`next/image`), leading to suboptimal LCP (Largest Contentful Paint) and unnecessary bandwidth usage. Additionally, icon buttons in the header lack textual labels or `aria-label` attributes, making them inaccessible to screen readers.

## Current state

- `src/app/page.tsx`: Uses raw `<img src="...">` and icon-only buttons (lines 44-67).
- `src/components/ArtCard.tsx` (created in plan 001): Uses background image styles via arbitrary Tailwind classes for the artwork background.

## Commands you will need

| Purpose   | Command            | Expected on success |
| --------- | ------------------ | ------------------- |
| Typecheck | `npx tsc --noEmit` | exit 0, no errors   |

## Scope

**In scope**:

- `src/app/page.tsx`
- `src/components/ArtCard.tsx`

**Out of scope**:

- Reorganizing the public assets directory.

## Git workflow

- Branch: `advisor/002-optimize-images-a11y`
- Commit per step or per logical unit
- Do NOT push or open a PR unless the operator instructed it.

## Steps

### Step 1: Add accessibility labels to icon buttons in header

In `src/app/page.tsx`, find the icon-only buttons in the header (Moon, Chat, Shopping Cart). Add descriptive `aria-label` attributes to the `<Button>` components (e.g., `aria-label="Toggle dark mode"`, `aria-label="Messages"`, `aria-label="Shopping Cart"`).

**Verify**: `npx tsc --noEmit` → exit 0, no errors

### Step 2: Convert `<img>` tags to `next/image` in page.tsx

In `src/app/page.tsx`, import `Image` from `next/image`. Replace all decorative `<img>` tags with `<Image>`. Note that `next/image` requires `width` and `height` properties or `fill`. For simple icons (like `/icons/moon.png`), provide appropriate width/height (e.g. `width={24} height={24}`). For the background image of the `main` tag, it can be left as `background-image` or also refactored to use an absolutely positioned `Image` component.

**Verify**: `npx tsc --noEmit` → exit 0, no errors

### Step 3: Use `next/image` in `ArtCard` component

In `src/components/ArtCard.tsx`, refactor the card container. Instead of using `background-image` styles, make the container `relative overflow-hidden` and place an `<Image src={imageUrl} alt={title} fill className="object-cover" />` as the first child, followed by the content container which needs a relative position and z-index to overlay on top of the image (e.g., `relative z-10 flex h-full flex-col p-3`).

**Verify**: `npx tsc --noEmit` → exit 0, no errors

## Test plan

- Visual inspection required. Check that the images load correctly and card layouts are unbroken. Check DOM for `aria-label` on buttons.

## Done criteria

- [ ] `npx tsc --noEmit` exits 0
- [ ] No background image URL styles remain in `ArtCard.tsx`.
- [ ] Icon buttons have `aria-label`.
- [ ] `plans/README.md` status row updated

## STOP conditions

Stop and report back if:

- `next/image` causes severe layout breakage in the Carousel that cannot be fixed with simple `fill` and `object-cover` utilities.

## Maintenance notes

- Any future image additions should default to `next/image` for performance benefits.
