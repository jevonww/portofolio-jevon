# AGENTS.md

## Commands
- `npm run dev`: Start dev server
- `npm run build`: Production build
- `npm run lint`: ESLint check (required before completion)

## Architecture & Content
- **Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS v4.
- **Content**: Single source of truth is `lib/data.ts`. NEVER hardcode content in components.
- **Language**: Indonesian.

## Stylings & Patterns
- **Tailwind**: Use `@theme` block in `globals.css`. Color tokens: `bg-bg`, `text-ink`, `border-line`.
- **Fonts**: Use utility classes: `font-display`, `font-body`, `font-mono`.
- **Components**: Client components must have `"use client"`. Reveal animations via `RevealOnScroll`.
- **Integrations**: Use `SplitFlapText` for main display headers.
