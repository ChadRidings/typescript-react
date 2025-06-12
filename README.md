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

### Tailwind CSS
Tailwind CSS is a utility-first CSS framework that helps you build modern, responsive web interfaces directly in your HTML or JSX using small, composable classes.

#### What Does "Utility-First" Mean?
Instead of writing custom CSS like this:
```css .btn {
  background-color: blue;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}```

You write the same styles directly in your HTML using utility classes:
```css <button class="bg-blue-500 text-white px-4 py-2 rounded">
  Click me
</button>```

