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

## Example

- create a store.ts file inside the src folder
- 


---
@3/19