# AGENTS.md

## Build/Lint/Test Commands
- `pnpm dev` - Start development server with turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- No test framework configured - add tests with `vitest` or `jest`

## Code Style Guidelines
- **Framework**: Next.js 15.4.5 with TypeScript, React 19.1.0
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Imports**: Use `@/*` alias for all imports
- **Components**: Use functional components with TypeScript
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Types**: Strict TypeScript enabled, define explicit types
- **CSS**: Use CSS variables from globals.css for theming
- **Utils**: Use `cn()` utility from `@/lib/utils` for className merging
- **Error Handling**: Use try-catch blocks with proper error boundaries
- **Formatting**: Follow existing patterns in codebase