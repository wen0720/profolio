# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands are run from the repo root unless noted.

```bash
pnpm dev          # Start all apps in dev mode (Turbopack)
pnpm build        # Build all apps/packages
pnpm lint         # Lint all packages
pnpm format       # Format all TS/TSX/MD files with Prettier
```

From `apps/web`:
```bash
pnpm lint:fix     # Auto-fix lint errors
pnpm typecheck    # Run tsc --noEmit
```

## Architecture

This is a **pnpm + Turborepo monorepo** with:

- `apps/web` — Next.js 16 portfolio site (the only app)
- `packages/ui` — Shared component library (shadcn/ui pattern, has its own `globals.css` and `components.json`)
- `packages/eslint-config` — Shared ESLint configs (`base`, `next`, `react-internal`)
- `packages/typescript-config` — Shared TSConfig presets

### `apps/web` key details

- **Path alias**: `@/` maps to `apps/web/` root
- **Workspace imports**: `@workspace/ui` for components/utilities; `cn()` from `@workspace/ui/lib/utils`
- **CSS**: Tailwind v4 (no `tailwind.config`—config lives in CSS). Global base styles + design tokens in `packages/ui/src/styles/globals.css`; hero keyframe animations in `apps/web/app/globals.css`
- **Theme**: `next-themes` via `<Providers>` in `layout.tsx`; dark mode toggled via `.dark` class
- **3D/WebGL**: React Three Fiber + Three.js. Two independent canvases:
  - `BackgroundStream` — fixed full-screen layer (`z-index: -10`), animates falling cyan particles in a cylinder
  - `ParticleScene` (inside `HeroSection`) — rotating wireframe torus ring
- **Site language**: Traditional Chinese (zh-TW)

### Styling conventions

- Tailwind v4 with OKLCH color tokens defined as CSS variables in `packages/ui/src/styles/globals.css`
- Custom keyframes (glitch, fade-up, scanline, etc.) are defined in `apps/web/app/globals.css` and referenced inline via `animate-[name_duration_...]`
- Prettier config: single quotes, tab width 2, with `prettier-plugin-tailwindcss` and `prettier-plugin-classnames` for class sorting
