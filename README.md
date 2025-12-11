# React 19 + Vite + Tailwind CSS v4 + ShadCN UI + zustand + React router v7 + Motion Starter Template!

## Version Selection

- **v2.0.0** (Latest): Includes Motion animations and animated icons
- **v1.0.0** (Stable): Basic template without Motion/Icons - lighter and simpler

## How to use

```bash
git clone git@github.com:momolly1024/React19-Vite-Taiwlindv4-Shadcn-ReactRouterV7.git
```

```bash
npm install --legacy-peer-deps
```

```bash
npm run dev
```

## Adding New Animated Icons

**Install icons** (available from https://animateicons.vercel.app/):

```bash
node install-icon.js check
node install-icon.js heart
node install-icon.js arrow
```

**Note:** Only icons from the official website can be installed.

## Example: BellIcon Usage

```tsx
import { BellIcon, BellIconHandle } from '@/components/icons/BellIcon';
import { useRef } from 'react';

function MyComponent() {
  const bellRef = useRef<BellIconHandle>(null);
  
  // Auto-trigger on hover (default behavior)
  
  // Manual control functions
  const startAnimation = () => bellRef.current?.startAnimation();
  const stopAnimation = () => bellRef.current?.stopAnimation();

  return (
    <div>
      {/* Auto-hover animation */}
      <BellIcon size={32} className="text-blue-500" />
      
      {/* Manual control */}
      <BellIcon 
        ref={bellRef}
        size={28}
        className="cursor-pointer"
      />
      
      <button onClick={startAnimation}>Start Animation</button>
      <button onClick={stopAnimation}>Stop Animation</button>
    </div>
  );
}
```

## Example: Motion Library Usage

```tsx
import { motion } from 'motion/react';

function MyComponent() {
  const items = [
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' }
  ];

  return (
    <div>
      {/* Basic fade in animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Fade in content
      </motion.div>

      {/* Interactive hover animation */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Interactive Button
      </motion.button>

      {/* Continuous rotation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-8 h-8 bg-red-500"
      >
        Rotating element
      </motion.div>

      {/* Staggered list animation */}
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {item.content}
        </motion.div>
      ))}
    </div>
  );
}
```

## Icon Properties

- **size**: `number` - Icon size in pixels (default: 28)
- **className**: `string` - Additional CSS classes
- **ref**: `BellIconHandle` - For manual animation control
- All standard HTMLMotionProps are supported

## Available Methods (via ref)

- `startAnimation()` - Start the animation manually
- `stopAnimation()` - Stop the animation and return to normal state

## File Structure for Icons

```
src/
  components/
    icons/
      BellIcon.tsx
      CheckIcon.tsx
      HeartIcon.tsx
      [OtherIcon].tsx
  lib/
    utils.ts (required for cn function)
```

## Prettier Configuration

`.prettierrc`

```js
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

## Version History

- **2025/08/26** Add Motion library, animated BellIcon component, install script, and comprehensive animation examples
- **2025/08/20** Add fetch fake API function and useEffect to get data
- **2025/08/19** Optimize Home and About page style (cleaner layout with Tailwind + ShadCN)
- **2025/08/19** Add Prettier configuration (.prettierrc) with documentation
- **2025/05/07** Add react-i18next and demo(i18n.js)(toggleLanguage)
- **2025/04/16** Add zustand and demo(store.js)
- **2025/02/13** Add React router v7
- **2025/02/13** Release

## Dependencies

### Core Dependencies

- React 19
- Vite 6.1.0
- Tailwind CSS v4
- ShadCN UI Components
- React Router v7
- Zustand (State Management)
- React i18next (Internationalization)
- Motion (Animations)

### Key Features

- ⚡ Lightning fast development with Vite
- 🎨 Modern UI with Tailwind CSS v4 and ShadCN
- 🌐 Internationalization ready
- 📱 Responsive design
- 🔄 State management with Zustand
- 🎭 Smooth animations with Motion
- 🎯 TypeScript support
- 📋 API integration examples
- 🔗 Modern routing with React Router v7
- 🎨 Animated icons from animateicons.vercel.app

## Project Structure

```
src/
  ├── components/
  │   ├── ui/           # ShadCN UI components
  │   └── icons/        # Animated icon components
  ├── pages/            # Route pages
  ├── lib/              # Utility functions
  ├── store.js          # Zustand store
  ├── i18n.js          # Internationalization config
  └── App.tsx          # Main app component
```


## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=momolly1024/React19-Vite-Taiwlindv4-Shadcn-ReactRouterV7&type=date&legend=top-left)](https://www.star-history.com/#momolly1024/React19-Vite-Taiwlindv4-Shadcn-ReactRouterV7&type=date&legend=top-left)



--
