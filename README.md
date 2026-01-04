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
├── src
│   └── app
│       ├── page.test.tsx
│       └── page.tsx
│   └── components
│       ├── ResumeApp.tsx
│       └── ...
└── ...
```

## Features and changes

- SPA-style resume views with menu navigation in `src/components/ResumeApp.tsx`.
- Shared UI components in `src/components`.
- Jest + Testing Library setup in `jest.config.js` and `jest.setup.ts`.
- Page and component tests in `src/app/page.test.tsx` and `src/components`.
