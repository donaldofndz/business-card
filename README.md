# Business Card

Minimal Next.js app using the App Router, TypeScript, Tailwind CSS, ESLint, and Jest.

## Installation

```bash
npm install
```

## Run the app

```bash
npm run dev
```

Open http://localhost:3000 to view the resume views.

## Run tests

```bash
npm run test
```

## Run linting

```bash
npm run lint
```

## Folder structure overview

```text
.
├── jest.config.js
├── jest.setup.ts
├── middleware.ts
├── src
│   └── app
│       ├── [locale]
│       │   └── page.tsx
│       ├── page.test.tsx
│       └── page.tsx
│   └── components
│       ├── LanguageSelector.tsx
│       ├── ResumeApp.tsx
│       └── ...
│   └── content
│       ├── index.ts
│       └── locales
│           ├── en.json
│           └── es.json
│   └── i18n
│       └── config.ts
└── ...
```

## Internationalization (i18n)

- Locale routing uses `/en` and `/es` paths with App Router at `src/app/[locale]/page.tsx`.
- `middleware.ts` detects the browser language from `Accept-Language` and redirects to the best locale.
- The selected locale is stored in the `NEXT_LOCALE` cookie and applied to the root layout.
- Use the language dropdown in the top-right to switch language client-side.

### Add a new language

1. Add a new locale JSON file in `src/content/locales/` (e.g., `nl.json`).
2. Register the locale in `src/i18n/config.ts` and import it in `src/content/index.ts`.

### Update text content

- Edit the locale JSON files in `src/content/locales/`.
- All UI copy is sourced from these files; no React changes are required.

## Features and changes

- SPA-style resume views with menu navigation in `src/components/ResumeApp.tsx`.
- Built-in i18n with locale routing, browser detection, and UI language switching.
- Light and dark mode support synced to system preference via `src/components/ThemeSync.tsx`.
- Shared UI components in `src/components`.
- Jest + Testing Library setup in `jest.config.js` and `jest.setup.ts`.
- Page and component tests in `src/app/page.test.tsx` and `src/components`.
