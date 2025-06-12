# Vite + React + TypeScript + Redux + Tailwind

Documentation:

- [Vite Documentation](https://vite.dev/guide/) - Build tool
- [React Documentation](https://react.dev/reference/react) - Library
- [TypeScript Documentation](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) - Scripting language
- [React Redux Documentation](https://react-redux.js.org/tutorials/quick-start) - State management
- [Tailwind Documentation](https://tailwindcss.com/docs/installation/using-vite) - Standardized styling

## Running the Application

1. Clone this repository
2. Navigate to the directory to where it's been cloned and run the following:

```js
npm i // installs the application dependencies
npm run dev // runs the application in localhost
```

### State Management
I'm using Redux for state management and thunks to handle any side effects.

#### Common Side Effects Thunks Handle:
- Fetching data from APIs
- Posting data to servers
- Delaying actions (e.g., timeouts)
- Conditionally dispatching actions based on current state
- Chaining multiple actions

#### Why Use Thunks for Side Effects?
Redux reducers must be pure functions, meaning they cannot:
- Make network requests
- Read from or write to the disk
- Use timers or random values

Thunks provide a controlled way to move impure logic (side effects) out of reducers and into middleware, keeping your state management predictable and testable.


