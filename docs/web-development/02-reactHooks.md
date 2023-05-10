---
slug: react-hooks
title: React Hooks
authors: Ashutosh
---

# React Hooks

## Introduction
React Hooks are a new addition to React that allow you to use state and other React features in functional components. They are a great way to make your code more concise, reusable, and easier to understand.

In this blog post, we will discuss the most used React Hooks and how to use them.

## useState

The `useState` hook is used to manage state in functional components. It takes two arguments: the initial state and a function that updates the state. The state is updated whenever the function is called.

For example, the following code uses `useState` to create a counter:

```jsx
const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
};

const decrement = () => {
  setCount(count - 1);
};

return (
  <div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <p>Count: {count}</p>
  </div>
);
```

This code creates a state variable called `count` and two functions called `increment` and `decrement`. The `increment` function increments the value of `count` and the `decrement` function decrements the value of `count`. The code also returns a `div` element with two buttons, one for incrementing the count and one for decrementing the count.

## useEffect

The `useEffect` hook is used to perform side effects in functional components. It takes two arguments: a function that is called when the component mounts and updates, and an array of dependencies. The function is only called when any of the dependencies change.

For example, the following code uses `useEffect` to fetch data from an API:

```jsx
const [data, setData] = useState(null);

useEffect(() => {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => setData(data));
}, []);

return (
  <div>
    <p>Data: {data}</p>
  </div>
);
```

## useContext

The `useContext` hook is used to access context from a functional component. It takes two arguments: the context to access and a default value. The context is returned by the hook.

For example, the following code uses `useContext` to access the `theme` context:

```jsx
const { theme } = useContext(ThemeContext);

return (
  <div>
    <p>Theme: {theme}</p>
  </div>
);
```

## useReducer

The `useReducer` hook is used to manage complex state in functional components. It takes three arguments: a reducer function, an initial state, and an array of initial state values. The reducer function is called whenever the state changes.

For example, the following code uses `useReducer` to create a shopping cart:

```jsx
const [items, setItems] = useReducer((state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item];
    case 'REMOVE_ITEM':
      return state.filter(item => item !== action.item);
    default:
      return state;
  }
}, []);

const addItem = (item) => setItems({
  type: 'ADD_ITEM',
  item,
});

const removeItem = (item) => setItems({
  type: 'REMOVE_ITEM',
  item,
});

return (
  <div>
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
    <button onClick={addItem}>Add Item</button>
    <button onClick={removeItem}>Remove Item</button>
  </div>
);
```

## useMemo

The `useMemo` hook allows you to memoize expensive calculations. Memoization is a technique that stores the result of a calculation so that it does not have to be recalculated every time it is needed.

To use `useMemo`, you first need to define a function that will perform the calculation. This function can take any number of arguments, but the first argument is always the dependencies.

The dependencies are the values that will cause the calculation to be re-evaluated. For example, if the calculation depends on the value of a state variable, you would want to include the state variable in the dependencies array.

For example:

```
const expensiveCalculation = () => {
  // Perform an expensive calculation
};

const memoizedCalculation = useMemo(() => expensiveCalculation(), [state]);
```

This will create a memoized version of the `expensiveCalculation` function. The memoized function will only be called when the value of the `state` variable changes.


Reference
1. https://www.w3schools.com/react/react_hooks.asp
2. https://www.freecodecamp.org/news/full-guide-to-react-hooks/
3. www.github.com/MonguDykrai/react-ts-w8potu

Thank You for reading!
