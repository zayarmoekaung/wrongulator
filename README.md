# Wrongulator — ReactLynx Calculator

A small ReactLynx calculator demo bootstrapped with create-rspeedy.

Prerequisites
- Node.js >= 18
- pnpm (recommended)

Install
```bash
pnpm install
```

Development
```bash
pnpm run dev
```
Open the QR code shown in the terminal with LynxExplorer.

Build / Preview
```bash
pnpm run build
pnpm run preview
```

Tests
```bash
pnpm run test
```

Formatting
```bash
pnpm run format
```

Quick overview
- The app root component is [`App`](src/App.tsx).
- UI button component: [`Btn`](src/components/btn/btn.tsx).
- State stores:
  - Syntax and editing: [`useCalculate`](src/stores/useCalculate.ts)
  - History: [`useHistory`](src/stores/useHistory.ts)
  - Result display: [`useResult`](src/stores/useResult.ts)
- Core logic:
  - Expression evaluation: [`calculateSyntaxTree`](src/utils/calculate.ts)
  - Syntax rendering: [`parseSyntaxTree`](src/utils/syntaxParser.ts)

Project layout
- [src](src) — source files
- [package.json](package.json) — scripts and dependencies
- [lynx.config.ts](lynx.config.ts) — rspeedy config
- [vitest.config.ts](vitest.config.ts) — test runner config
- [LICENSE](LICENSE)

Contributing
- Edit [src/App.tsx](src/App.tsx) to change the UI.
- Run the test suite with `pnpm run test`.
- Keep code formatted with `pnpm run format`.

License
- Distributed under the terms in [LICENSE](LICENSE).