# React 19 + Vite + Tailwind CSS v4 + ShadCN UI + zustand + React router v7 Starter Template！

## How to use

```
git clone
```

```
npm install --legacy-peer-deps
```

```
npm run dev
```

#### Prettier Configuration

`.prettierrc`

```json
{
	"printWidth": 100, // Maximum line length (100 is good for React/TS projects)
	"tabWidth": 4, // Use 4 spaces per indentation level
	"useTabs": false, // Indent with spaces, not tabs
	"semi": true, // Always add semicolons
	"singleQuote": true, // Use single quotes instead of double quotes
	"trailingComma": "es5", // Add trailing commas where valid in ES5 (objects, arrays, etc.)
	"bracketSpacing": true, // Add spaces between brackets: { foo: bar }
	"jsxSingleQuote": false, // Use double quotes in JSX attributes
	"arrowParens": "always", // Always include parentheses around arrow function arguments
	"endOfLine": "lf", // Use LF for line endings (consistent across platforms)
	"plugins": [
		"prettier-plugin-tailwindcss" // Auto-sort Tailwind CSS classes
	]
}
```

##### version

- 2025/08/19 Optimize Home and About page style (cleaner layout with Tailwind + ShadCN)
- 2025/08/19 Add Prettier configuration (.prettierrc) with documentation
- 2025/05/07 Add react-i18next and demo(i18n.js)(toggleLanguage)
- 2025/04/16 Add zustand and demo(store.js)
- 2025/02/13 Add React router v7
- 2025/02/13 Release
