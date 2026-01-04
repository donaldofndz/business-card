# Project goals and scope

- Build a minimal, production-ready Next.js business card app.
- Keep dependencies lean and only add what is required.
- Use the App Router with TypeScript, Tailwind CSS, ESLint, and Jest.

# Coding standards

- TypeScript only; no JavaScript in `src/`.
- Prefer small, focused components and clear naming.
- Use `PascalCase` for components and `camelCase` for functions/variables.
- Keep files colocated with the feature they support.

# Linting rules and expectations

- Follow Next.js + TypeScript ESLint defaults.
- No lint warnings in CI; treat warnings as errors before merge.
- Run `npm run lint` before pushing.

# Testing rules and coverage expectations

- Jest is the default test runner.
- Every new component or page should have a basic render test.
- Aim for meaningful coverage of critical UI paths.

# i18n rules

- Use Next.js built-in locale routing and middleware for language detection.
- All user-facing copy must come from locale files in `src/content/locales/`.
- Do not hardcode strings in components; update translation files instead.

# Copy management guidelines

- Keep copy centralized in JSON locale files.
- Avoid logic in content files; they should only contain text and structured data.
- Update both locales when changing shared copy unless intentionally language-specific.

# UI consistency expectations

- Keep typography, spacing, and color usage consistent with the reference layouts.
- Ensure new UI elements match existing light/dark styles.
- Avoid introducing new visual styles without updating the reference-based components.

# Git workflow and commit conventions

- Use short-lived branches per feature or fix.
- Use conventional commits (e.g., `feat:`, `fix:`, `chore:`).
- Avoid large, mixed-purpose commits.

# Pull request checklist

- Lint passes locally.
- Tests pass locally.
- Documentation updated for meaningful changes.
- Scope is focused and reviewed for simplicity.

# Do / Don’t guidelines

- Do keep the UI minimal and accessible.
- Do prefer standard Next.js patterns.
- Don’t add libraries without a clear requirement.
- Don’t bypass lint or tests.

# Quality gates

- `npm run lint` must pass.
- `npm run test` must pass.
