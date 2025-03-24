/*
======================================================
🎯 Top 50 React Interview Questions with Answers
======================================================
*/

// ✅ 1. What is React?
const q1 = `
React is a JavaScript library developed by Facebook for building user interfaces. 
It is component-based and allows for the development of dynamic and interactive web applications.
`;

// ✅ 2. What are components in React?
const q2 = `
Components are the building blocks of a React application. 
They can be functional or class-based and encapsulate logic and UI in reusable pieces.
`;

// ✅ 3. Difference between functional and class components?
const q3 = `
Functional Components:
- Simple JavaScript functions.
- Use hooks to manage state and side effects.
- Easier to read and test.
Example:
function Greeting() {
  return <h1>Hello World!</h1>;
}

Class Components:
- ES6 classes extending React.Component.
- Use lifecycle methods.
- More complex and less common now.
Example:
class Greeting extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
`;

// ✅ 4. What is JSX?
const q4 = `
JSX (JavaScript XML) is a syntax extension that allows writing HTML within JavaScript.
It must be transpiled to JavaScript using Babel.
Example:
const element = <h1>Hello, JSX!</h1>;
`;

// ✅ 5. What is the Virtual DOM?
const q5 = `
The Virtual DOM is a lightweight JavaScript object that represents the real DOM.
It allows React to update the UI efficiently by comparing changes and applying only necessary updates.
`;

// ✅ 6. What is React State?
const q6 = `
State is a built-in object that stores dynamic data in a component.
UseState hook is commonly used to manage state in functional components.
Example:
const [count, setCount] = useState(0);
`;

// ✅ 7. What are props in React?
const q7 = `
Props (properties) are used to pass data from parent to child components.
They are immutable and cannot be modified by the child.
Example:
<Greeting name="Amit" />
`;

// ✅ 8. What is prop drilling?
const q8 = `
Prop drilling is the process of passing data from a parent component to deeply nested child components via props.
It can be avoided using Context API or Redux.
`;

// ✅ 9. What is React context?
const q9 = `
React Context provides a way to pass data through the component tree without prop drilling.
Example:
const MyContext = React.createContext();
`;

// ✅ 10. What is a hook in React?
const q10 = `
Hooks are functions that allow functional components to use state and lifecycle features.
Examples:
- useState
- useEffect
- useContext
`;

// ✅ 11. What is useState hook?
const q11 = `
useState is a hook that allows adding state to a functional component.
Example:
const [count, setCount] = useState(0);
`;

// ✅ 12. What is useEffect hook?
const q12 = `
useEffect is used to perform side effects in functional components.
Example:
useEffect(() => {
  document.title = 'New Title';
}, []);
`;

// ✅ 13. What is the difference between useEffect and componentDidMount?
const q13 = `
useEffect:
- Used in functional components.
- Runs after every render unless dependency array is specified.

componentDidMount:
- Used in class components.
- Runs only once after the initial render.
`;

// ✅ 14. What is a controlled component?
const q14 = `
A controlled component is a form element where the component's state controls its value.
Example:
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
`;

// ✅ 15. What is an uncontrolled component?
const q15 = `
An uncontrolled component stores its own state internally and can be accessed using a ref.
Example:
<input type="text" ref={inputRef} />
`;

// ✅ 16. What is Redux?
const q16 = `
Redux is a state management library for JavaScript applications.
It provides a centralized store to manage state globally.
`;

// ✅ 17. What are the core principles of Redux?
const q17 = `
1. Single source of truth.
2. State is read-only.
3. Changes are made using pure functions.
`;

// ✅ 18. What is Redux Thunk?
const q18 = `
Redux Thunk is a middleware that allows you to write asynchronous logic in Redux.
Example:
const fetchData = () => {
  return (dispatch) => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'FETCH_SUCCESS', payload: data }));
  };
};
`;

// ✅ 19. What is the difference between Redux and Context API?
const q19 = `
Redux:
- Manages complex state logic.
- Suitable for large-scale applications.
- Involves actions, reducers, and middleware.

Context API:
- Manages simple global state.
- Suitable for small to medium applications.
- Easier to implement.
`;

// ✅ 20. What are higher-order components (HOC)?
const q20 = `
HOC is a function that takes a component and returns a new component.
Used to enhance or modify component functionality.
Example:
const withLogger = (Component) => {
  return (props) => {
    console.log('Component rendered');
    return <Component {...props} />;
  };
};
`;

// ✅ 21. What is React Router?
const q21 = `
React Router is a library that provides navigation and routing in a React application.
Example:
<BrowserRouter>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</BrowserRouter>
`;

// ✅ 22. What is lazy loading in React?
const q22 = `
Lazy loading is a technique that delays loading of components until they are needed.
Example:
const MyComponent = React.lazy(() => import('./MyComponent'));
`;

// ✅ 23. What is error boundary in React?
const q23 = `
Error boundaries are React components that catch JavaScript errors in their child component tree.
Example:
class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    console.log('Error:', error);
  }
  render() {
    return this.props.children;
  }
}
`;

// ✅ 24. What is a Pure Component?
const q24 = `
A Pure Component in React automatically implements shouldComponentUpdate with shallow prop and state comparison.
Example:
class MyComponent extends React.PureComponent {}
`;

// ✅ 25. How does React handle forms?
const q25 = `
React handles forms using controlled or uncontrolled components.
Controlled:
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
`;

// ✅ 26. What is memoization in React?
const q26 = `
Memoization optimizes rendering by storing the result of expensive function calls and reusing it.
Example:
const MemoizedComponent = React.memo(MyComponent);
`;

// ✅ 27. What is a fragment in React?
const q27 = `
A Fragment allows grouping multiple elements without adding extra nodes to the DOM.
Example:
<React.Fragment>
  <h1>Hello</h1>
  <p>World</p>
</React.Fragment>
`;

// ✅ 28. What is reconciliation in React?
const q28 = `
Reconciliation is the process by which React updates the Virtual DOM and syncs it with the real DOM.
`;

// ✅ 29. What is StrictMode in React?
const q29 = `
StrictMode is a wrapper that highlights potential problems in an application during development.
Example:
<React.StrictMode>
  <App />
</React.StrictMode>
`;

// ✅ 30. What are keys in React?
const q30 = `
Keys help React identify which items have changed, added, or removed in a list.
Example:
{items.map((item) => <li key={item.id}>{item.name}</li>)}
`;

// ✅ 31. What is React Portals?
const q31 = `
Portals allow rendering a component’s children into a different part of the DOM.
Example:
ReactDOM.createPortal(<Child />, document.getElementById('portal-root'));
`;

// ✅ 32. What is shallow rendering?
const q32 = `
Shallow rendering renders a component one level deep without rendering child components.
Useful for unit testing.
`;

// ✅ 33. How to optimize performance in React?
const q33 = `
1. Use PureComponent or React.memo.
2. Avoid unnecessary re-renders.
3. Use React.lazy for lazy loading.
4. Use key prop correctly.
`;

// ✅ 34. What is componentWillUnmount?
const q34 = `
componentWillUnmount is a lifecycle method in class components that runs before a component is removed from the DOM.
`;

// ✅ 35. What are synthetic events in React?
const q35 = `
Synthetic events are React's wrapper around native events, providing consistent behavior across browsers.
`;

// ✅ 36. What is the significance of key prop in lists?
const q36 = `
The key prop helps React efficiently update and re-render items in a list.
`;

// ✅ 37. What is the difference between state and props?
const q37 = `
State:
- Managed within a component.
- Can be modified using setState or hooks.

Props:
- Passed from parent to child.
- Read-only and immutable.
`;

// ✅ 38. What is lifting state up in React?
const q38 = `
Lifting state up moves the state to a common parent component to manage shared state.
`;

// ✅ 39. What is forwardRef in React?
const q39 = `
forwardRef allows passing a ref to a child component.
Example:
const MyComponent = React.forwardRef((props, ref) => (
  <input ref={ref} />
));
`;

// ✅ 40. What is the difference between Fragment and <>?
const q40 = `
<> is a shorthand for React.Fragment.
Both allow rendering multiple elements without adding extra DOM nodes.
`;

// ✅ 41. How does React handle conditional rendering?
const q41 = `
Conditional rendering can be done using:
- Ternary operator
- Logical && operator
- if-else statements
`;

// ✅ 42. What is useMemo hook?
const q42 = `
useMemo optimizes performance by memoizing expensive calculations.
Example:
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
`;

// ✅ 43. What is useCallback hook?
const q43 = `
useCallback returns a memoized version of a callback function that only changes if dependencies change.
Example:
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
`;

// ✅ 44. What is hydrate in React?
const q44 = `
ReactDOM.hydrate() is used to hydrate a container whose HTML was server-rendered.
`;

// ✅ 45. What is StrictMode in React?
const q45 = `
StrictMode is a tool for highlighting potential problems in a React application.
`;

// ✅ 46. What is Concurrent Mode?
const q46 = `
Concurrent Mode helps React work on multiple tasks at the same time for better performance.
`;

// ✅ 47. What is suspense in React?
const q47 = `
Suspense allows you to handle asynchronous rendering and lazy loading.
Example:
<Suspense fallback={<Loading />}>
  <MyComponent />
</Suspense>
`;

// ✅ 48. What is hydrateRoot in React 18?
const q48 = `
hydrateRoot is used in React 18 for server-side rendering.
Example:
ReactDOM.hydrateRoot(document.getElementById('root'), <App />);
`;

// ✅ 49. What is React Fiber?
const q49 = `
React Fiber is the new reconciliation algorithm in React that enhances performance and rendering capabilities.
`;

// ✅ 50. What is StrictMode and when to use it?
const q50 = `
StrictMode helps identify potential issues in a React application during development.
It does not affect the production build.
`;



/*
======================================================
✅ End of React Interview Questions Notes
======================================================
*/

/*
==================================================
🎯 Top 100 React Interview Questions with Answers
==================================================
*/

// ✅ 1-50 Covered in Previous Part
// ✅ 51-100 with Answers Below
// ===============================================

// ✅ 51. What is the purpose of shouldComponentUpdate?
const q51 = `
shouldComponentUpdate is a lifecycle method that controls whether a component should re-render. It returns true by default but can be optimized for performance by comparing props and state.
`;

// ✅ 52. What is a callback ref in React?
const q52 = `
A callback ref is a function that gets called when a component is mounted or unmounted. It provides direct access to the DOM node or React component instance.
`;

// ✅ 53. How does server-side rendering (SSR) work in React?
const q53 = `
SSR renders the initial HTML on the server and sends it to the client, which improves performance and SEO. Next.js is a popular framework for SSR in React.
`;

// ✅ 54. What is Next.js, and why use it with React?
const q54 = `
Next.js is a React framework for server-side rendering (SSR), static site generation (SSG), and API routes. It optimizes performance and SEO by pre-rendering pages.
`;

// ✅ 55. How do you optimize performance in a React app?
const q55 = `
Performance in a React app can be optimized by using React.memo, useMemo, useCallback, lazy loading, code splitting, and avoiding unnecessary re-renders.
`;

// ✅ 56. What is memoization in React?
const q56 = `
Memoization is an optimization technique that caches the result of expensive functions or components to avoid unnecessary computations.
`;

// ✅ 57. How do you handle forms in React?
const q57 = `
Forms in React are handled using controlled or uncontrolled components. Controlled components use state to manage input values, while uncontrolled components rely on DOM references.
`;

// ✅ 58. What is the difference between useEffect and componentDidMount?
const q58 = `
useEffect is used in functional components and can run after every render, while componentDidMount is a lifecycle method in class components that runs only once after the initial render.
`;

// ✅ 59. What is a synthetic event in React?
const q59 = `
A synthetic event is a wrapper around native browser events that ensures consistent behavior across different browsers.
`;

// ✅ 60. How do you prevent component re-renders in React?
const q60 = `
To prevent re-renders, use React.memo for functional components, shouldComponentUpdate for class components, and useMemo or useCallback for memoizing values and functions.
`;

// ✅ 61. What are render props in React?
const q61 = `
Render props is a pattern in React where a function is passed as a prop to a component, allowing dynamic rendering.
`;

// ✅ 62. How do you debounce an input in React?
const q62 = `
Debouncing is implemented using a timeout to delay the execution of a function until after a specified delay. Use setTimeout or custom hooks like useDebounce.
`;

// ✅ 63. What is a fragment in React?
const q63 = `
A fragment is a wrapper that allows grouping of multiple elements without adding extra nodes to the DOM.
`;

// ✅ 64. How does reconciliation improve React performance?
const q64 = `
Reconciliation uses the Virtual DOM to compare and apply minimal changes to the real DOM, improving performance.
`;

// ✅ 65. What are controlled and uncontrolled inputs in React?
const q65 = `
Controlled Inputs: The input value is controlled by React state.
Uncontrolled Inputs: The input value is handled by the DOM directly.
`;

// ✅ 66. What is the difference between forwardRef and useRef?
const q66 = `
forwardRef passes a ref from a parent to a child component, while useRef creates a mutable reference that persists across renders.
`;

// ✅ 67. Explain React's strict mode usage.
const q67 = `
StrictMode is a wrapper component that highlights potential problems in the application by activating additional checks and warnings during development.
`;

// ✅ 68. How does lazy loading work in React?
const q68 = `
Lazy loading dynamically imports components only when needed, reducing initial load time and improving performance.
`;

// ✅ 69. How do you use React with TypeScript?
const q69 = `
To use React with TypeScript, create a project using \`npx create-react-app my-app --template typescript\` and use .tsx files with type annotations.
`;

// ✅ 70. How to use suspense with React.lazy?
const q70 = `
React.lazy() is used for dynamic imports, while Suspense shows a fallback UI until the component is loaded.
`;

// ✅ 71. What is code splitting in React?
const q71 = `
Code splitting breaks the app into smaller chunks to improve performance by loading only necessary code.
`;

// ✅ 72. How do you fetch data in React?
const q72 = `
Data can be fetched using fetch(), Axios, or React Query inside useEffect or by using SWR for optimized data fetching.
`;

// ✅ 73. What is the role of service workers in React?
const q73 = `
Service workers cache assets and provide offline functionality in Progressive Web Apps (PWAs).
`;

// ✅ 74. How do you handle error boundaries in React?
const q74 = `
Error boundaries are React components that catch JavaScript errors and display fallback UI.
`;

// ✅ 75. What are controlled vs uncontrolled components?
const q75 = `
Controlled: State controls the input value.
Uncontrolled: DOM controls the input value using refs.
`;

// ✅ 76. How to implement authentication in React?
const q76 = `
Authentication in React can be implemented using JWT tokens, localStorage, and session management, or via OAuth providers.
`;

// ✅ 77. How do you handle routes dynamically in React Router?
const q77 = `
Dynamic routes are created by using URL parameters and matched using \`:id\` or \`path\` props.
`;

// ✅ 78. What is a compound component in React?
const q78 = `
Compound components are a design pattern where multiple components work together to manage shared state.
`;

// ✅ 79. How to handle forms in React without a library?
const q79 = `
Forms can be handled using state and event handlers in functional or class components.
`;

// ✅ 80. What is Concurrent Mode in React?
const q80 = `
Concurrent Mode allows React to interrupt rendering and prioritize more urgent updates, improving responsiveness.
`;

// ✅ 81. What is Suspense with data fetching in React 18?
const q81 = `
In React 18, Suspense can handle async data fetching and show fallback UIs during loading.
`;

// ✅ 82. How does Concurrent Mode improve performance?
const q82 = `
Concurrent Mode improves responsiveness by allowing React to work on multiple tasks simultaneously and prioritize urgent updates.
`;

// ✅ 83. What is batching in React?
const q83 = `
Batching combines multiple state updates into a single re-render to optimize performance.
`;

// ✅ 84. What is hydration error in React?
const q84 = `
Hydration error occurs when the server-rendered HTML doesn't match the client-side rendering.
`;

// ✅ 85. What is the difference between useLayoutEffect and useEffect?
const q85 = `
useLayoutEffect runs synchronously after DOM updates, while useEffect runs asynchronously after render.
`;

// ✅ 86. How to implement global state management in React?
const q86 = `
Global state management can be done using Context API, Redux, Zustand, or Recoil.
`;

// ✅ 87. How does React context replace Redux in small apps?
const q87 = `
React Context provides a lightweight alternative to Redux for managing global state in small applications.
`;

// ✅ 88. What is CSR (Client-Side Rendering) in React?
const q88 = `
CSR renders content on the client side using JavaScript, making it suitable for SPAs.
`;

// ✅ 89. What is SSR (Server-Side Rendering)?
const q89 = `
SSR renders content on the server and sends pre-rendered HTML to the client, improving SEO and initial load time.
`;

// ✅ 90. What is ISR (Incremental Static Regeneration)?
const q90 = `
ISR allows static pages to be updated dynamically after build time in Next.js.
`;

// ✅ 91. What is useImperativeHandle in React?
const q91 = `
useImperativeHandle customizes the ref passed to a component and exposes specific methods to parent components.
`;

// ✅ 92. What are uncontrolled components in React?
const q92 = `
Uncontrolled components rely on the DOM for managing form values rather than React state.
`;

// ✅ 93. What is React DOM reconciliation process?
const q93 = `
Reconciliation is the process where React compares the Virtual DOM with the real DOM and applies minimal changes.
`;

// ✅ 94. What is React concurrent rendering?
const q94 = `
Concurrent rendering breaks rendering work into smaller chunks and allows pausing and resuming for a better user experience.
`;

// ✅ 95. How to test React applications?
const q95 = `
React applications can be tested using Jest, React Testing Library, and Enzyme.
`;

// ✅ 96. How to optimize React apps for SEO?
const q96 = `
Use SSR with Next.js, add meta tags, optimize images, and use proper routing and linking.
`;

// ✅ 97. What is React hydration error?
const q97 = `
Hydration error happens when the server-rendered HTML doesn't match the client-side HTML.
`;

// ✅ 98. How to use environment variables in React?
const q98 = `
Environment variables in React are stored in .env files and accessed using process.env.
`;

// ✅ 99. What is hydrateRoot in React 18?
const q99 = `
hydrateRoot is used for hydrating server-rendered content and attaches event listeners.
`;

// ✅ 100. How to improve performance in a large React app?
const q100 = `
Improve performance by using code splitting, lazy loading, React.memo, and optimizing re-renders.
`;

// 🎉 End of Top 100 React Interview Questions 🎉
