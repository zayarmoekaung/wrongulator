# Wrongulator — ReactLynx Calculator

A small ReactLynx calculator demo bootstrapped with create-rspeedy.

## Features

- Calculator mode: performs correct calculations.
- Wrongulator mode: gives absolutely wrong answers.
- Switch between calculator mode and wrongulator mode by tapping the title.

## Prerequisites

* Node.js >= 18
* pnpm (recommended)

## Install

```
pnpm install
```

## Development

```
pnpm run dev
```

Open the QR code shown in the terminal with LynxExplorer.

## Build / Preview

```
pnpm run build
pnpm run preview
```

## Quick overview

- The app root component is [`App`](src/App.tsx).
- UI button component: [`Btn`](src/components/btn/button.tsx).
- State stores:
  - Syntax : [`useSyntax`](src/stores/useSyntax.ts)
  - History: [`useHistory`](src/stores/useHistory.ts)
  - Result display: [`useResult`](src/stores/useResult.ts)
  - Wrongulate: [`useWrongulate`](src/stores/useWrongulate.ts)
- Core logic:
  - Expression evaluation: [`calculateSyntaxTree`](src/utils/calculate.ts)
  - Syntax rendering: [`parseSyntaxTree`](src/utils/syntaxParser.ts)
  - Syntax Editing : [`pushToTree`,`popFromTree`](src/utils/syntaxTree.ts)


### Project layout

- .gitignore
- .prettierignore
- .prettierrc
- LICENSE
- README.md
- lynx.config.ts
- package-lock.json
- package.json
- src/
  - App.css
  - App.tsx
  - __tests__/
    - index.test.tsx
  - assets/
    - arrow.png
    - lynx-logo.png
    - react-logo.png
  - components/
    - btn/
      - btn.style.css
      - button.tsx
      - control.tsx
      - number.tsx
      - operator.tsx
      - parenthesis.tsx
    - title/
      - title.style.css
      - title.tsx
  - index.tsx
  - rspeedy-env.d.ts
  - stores/
    - useSyntax.ts
    - useHistory.ts
    - useResult.ts
    - useWrongulate.ts
  - tsconfig.json
  - types/
    - nodeType.ts
    - syntaxNode.ts
  - utils/
    - calculate.ts
    - syntaxParser.ts
    - syntaxTree.ts
- tsconfig.json
- tsconfig.node.json
- vitest.config.ts

### Contributing

* Edit src/App.tsx to change the UI.

## License

* Distributed under the terms in LICENSE.