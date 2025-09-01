src = https://www.youtube.com/watch?v=_ngCLZ5Iz-0

# Why do we need Zustand?

When using `useState` to create a state variable, we keep the state local to the component where it's created.  
We can pass a state from one component to another through the use of `props`, but this gets complicated
as our component tree gets deeper, which ends up being a common problem known as **Prop Drilling**.  

The React native solution to Props Drilling is to use the **Context API** through the `useContext()` hook.  
This solution requires to nest your App, or a subset of it, in what's called a **context provider**, which 
doesn't scale really well.  

# What is Zustand?

Zustand is a library that allows us to have proper **state management** in a React application.  
More specifically, it allows **global state management** in our application.  
It also allows to persist data into the localStorage or sessionStorage via its `persist()` function.  

# How does Zustand work?

Zustan functions with the concept of **stores**.  
A store is a place where we store your state and any function that updates that state.  

Then, our React components can access the store, which means it can access: 
- the values in the state,
- the functions that update the state.

## Let's create our first store

- open a new folder in VSCodium
- create a new React project via `npm create vite@latest`
- project name = `.` (this will use the current folder)
- framework = React
- variant = TypeScript
- run `npm i` to install dependencies
- create a `store.ts` file inside the `src` folder
- install zustand via `npm i zustand`

In the `store.ts` file:
- `import { create } from "zustand";`
- since we're working in TypeScript, we need to define the type of our store
- create the store

```ts
import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
```

This way, the store (which is a store) is defined outside of a component and is accessible to any component.  

## Important note

The `use` keyword is required for every single **hook** in React, including custom hooks.  
In the example above, `useCounterStore` is a custom hook.  
It's actually a custom hook that we can use in a React component without having to wrap anything in a provider, 
and without having to pass any props.  

## Connecting our store to the App component

In `App.tsx`:
```tsx
import './App.css'
import { useCounterStore } from './store'

const App = () => {
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />
}

const OtherComponent = ({ count }: { count: number }) => {
  return <div>{count}</div>
}

export default App
```

## Updating the state

Check the `store.ts` file to see how we can increment and decrement the state.  

To update the count variable (the state), we use the `set` function which is provided by the `create` function.  


---
@9/19