// ============================================
// React Best Practices - All in One File
// ============================================

// 1. Component Structure
// ----------------------

// a. Keep Components Small and Focused
function Button( { onClick, children } )
{
    return <button onClick={onClick}>{children}</button>;
}

// b. Use Functional Components
function UserProfile( { name, age } )
{
    return <div>{name} is {age} years old.</div>;
}

// 2. State Management
// -------------------

// a. Use `useState` for Local State
const [ count, setCount ] = useState( 0 );

// b. Lift State Up When Necessary
function Parent()
{
    const [ count, setCount ] = useState( 0 );
    return (
        <div>
            <ChildA count={count} />
            <ChildB setCount={setCount} />
        </div>
    );
}

// c. Use Context API for Global State
const ThemeContext = createContext();

function App()
{
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}

// 3. Props and PropTypes
// ----------------------

// a. Use Destructuring for Props
function User( { name, age } )
{
    return <div>{name} is {age} years old.</div>;
}

// b. Validate Props with PropTypes
import PropTypes from 'prop-types';

User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};

// 4. Hooks
// --------

// a. Use `useEffect` for Side Effects
useEffect( () =>
{
    fetchData().then( ( data ) => setData( data ) );
}, [] );

// b. Avoid Unnecessary Re-Renders
const memoizedValue = useMemo( () => computeExpensiveValue( a, b ), [ a, b ] );
const memoizedCallback = useCallback( () => doSomething( a, b ), [ a, b ] );

// 5. Styling
// ----------

// a. Use CSS Modules or Styled Components
// CSS Modules
import styles from './Button.module.css';

function Button()
{
    return <button className={styles.button}>Click Me</button>;
}

// Styled Components
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: blue;
  color: white;
`;

function Button()
{
    return <StyledButton>Click Me</StyledButton>;
}

// 6. Code Organization
// -------------------

// a. Follow a Consistent Folder Structure
/*
src/
├── components/
│   ├── Button/
│   │   ├── Button.js
│   │   ├── Button.module.css
│   │   └── index.js
├── pages/
│   ├── Home.js
│   ├── About.js
├── hooks/
│   ├── useFetch.js
├── context/
│   ├── ThemeContext.js
├── utils/
│   ├── helpers.js
*/

// b. Use Index Files for Clean Imports
// components/Button/index.js
export { default } from './Button';

// 7. Performance Optimization
// ---------------------------

// a. Use `React.memo` for Memoization
const MemoizedComponent = React.memo( function MyComponent( props )
{
    // Component logic
} );

// b. Lazy Load Components
const LazyComponent = React.lazy( () => import( './LazyComponent' ) );

function App()
{
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </Suspense>
    );
}

// 8. Testing
// ----------

// a. Write Unit Tests
import { render, screen } from '@testing-library/react';
import Button from './Button';

test( 'renders button with text', () =>
{
    render( <Button>Click Me</Button> );
    const buttonElement = screen.getByText( /Click Me/i );
    expect( buttonElement ).toBeInTheDocument();
} );

// b. Test Component Behavior, Not Implementation

// 9. Error Handling
// -----------------

// a. Use Error Boundaries
class ErrorBoundary extends React.Component
{
    state = { hasError: false };

    static getDerivedStateFromError( error )
    {
        return { hasError: true };
    }

    componentDidCatch( error, errorInfo )
    {
        console.error( error, errorInfo );
    }

    render()
    {
        if ( this.state.hasError )
        {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

// 10. Code Quality
// ----------------

// a. Use ESLint and Prettier
// b. Write Clean and Readable Code

// 11. Documentation
// -----------------

// a. Add Comments and Documentation
/**
 * A reusable button component.
 * @param {Object} props - The component props.
 * @param {Function} props.onClick - The click handler.
 * @param {ReactNode} props.children - The button content.
 */
function Button( { onClick, children } )
{
    return <button onClick={onClick}>{children}</button>;
}

// 12. Avoid Anti-Patterns
// -----------------------

// a. Avoid Direct State Mutations
// Bad
// state.count = 1;

// Good
setCount( 1 );

// b. Avoid Unnecessary State
// Bad
// const [fullName, setFullName] = useState(`${firstName} ${lastName}`);

// Good
const fullName = `${ firstName } ${ lastName }`;

// ============================================
// End of React Best Practices
// ============================================

// ======================================================
// 🎯 JSX Expressions and Evaluations in React
// ======================================================

// ✅ a. Inside JSX Elements
const name = "John";
const age = 25;
const userInfo = (
    <div>
        <h1>Welcome, {name}!</h1>
        <p>You are {age} years old.</p>
    </div>
);

// ✅ Output:
// <div>
//   <h1>Welcome, John!</h1>
//   <p>You are 25 years old.</p>
// </div>

// ✅ b. Using JavaScript Expressions
const x = 5;
const y = 10;
const result = (
    <div>
        <p>Sum: {x + y}</p>
        <p>Product: {x * y}</p>
    </div>
);

// ✅ Output:
// <div>
//   <p>Sum: 15</p>
//   <p>Product: 50</p>
// </div>

// ✅ c. Conditional Expressions (Ternary Operator)
const isLoggedIn = true;
const userStatus = (
    <div>
        {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
);

// ✅ Output when isLoggedIn = true:
// <div>
//   <p>Welcome back!</p>
// </div>

// ✅ Output when isLoggedIn = false:
// <div>
//   <p>Please log in.</p>
// </div>

// ✅ d. Calling Functions Inside JSX
function getGreeting( userName )
{
    return `Hello, ${ userName }!`;
}

const greetingMessage = (
    <div>
        <h2>{getGreeting( "Amit" )}</h2>
    </div>
);

// ✅ Output:
// <div>
//   <h2>Hello, Amit!</h2>
// </div>

// ✅ e. Inline Styles with JSX
const styleObj = {
    color: "blue",
    fontSize: "20px",
};

const styledElement = <p style={styleObj}>This is a styled paragraph.</p>;

// ✅ Output:
// <p style="color: blue; font-size: 20px;">This is a styled paragraph.</p>

// ======================================================
// 🎯 Common Interview Questions on JSX Expressions
// ======================================================

// 1. ❓ What is JSX in React?
// ✅ JSX (JavaScript XML) is a syntax extension that allows writing HTML elements and components in JavaScript.


// 2. ❓ Can you use JavaScript inside JSX?
// ✅ Yes, JavaScript expressions can be used inside JSX using curly braces {}.


// 3. ❓ How do you conditionally render content in JSX?
// ✅ You can use the ternary operator or logical operators.
// Example: {isLoggedIn ? <p>Welcome!</p> : <p>Please log in.</p>}


// 4. ❓ How do you apply styles in JSX?
// ✅ Inline styles are applied using a JavaScript object.
// Example: <div style={{ color: 'red', fontSize: '18px' }}>Styled Text</div>


// 5. ❓ How do you evaluate expressions in JSX?
// ✅ Use curly braces {} to evaluate expressions.
// Example: <p>Sum: {x + y}</p>


// 6. ❓ Can JSX return multiple elements?
// ✅ Yes, you can wrap multiple elements inside a fragment <>...</> or a <div>.
// Example:
// <>
//   <h1>Hello</h1>
//   <p>Welcome!</p>
// </>


// 7. ❓ What happens if you write JavaScript statements inside JSX?
// ❌ JavaScript statements (like loops/conditionals) cannot be used directly inside JSX.
// ✅ Use functions or methods to handle them outside JSX and call the result inside JSX.


// 8. ❓ Can you call functions inside JSX?
// ✅ Yes, you can call a function and return a value inside JSX.
// Example: <h1>{getGreeting('Amit')}</h1>


// 9. ❓ What is the difference between an expression and a statement in JSX?
// ✅ Expressions return a value and can be used inside JSX, while statements (like if, for) cannot be used directly.


// 10. ❓ How do you display dynamic data in JSX?
// ✅ Dynamic data is displayed using expressions within curly braces {}.
// Example: <p>{user.name}</p>


// ✅ Summary:
/*
1. Expressions in React allow embedding JavaScript logic inside JSX.
2. Use expressions in JSX, attributes, and event handlers.
3. Use ternary and logical operators for conditional rendering.
4. Avoid using statements like if/else or loops directly inside JSX.
*/
//------------------------------------------------------------------------------------------------
// =========================================
// Clumsy Code vs. Clean Code Examples
// =========================================

// 🛑 Clumsy Code Example 1
const userOneName = "John";
const userOneAge = 25;

const userInfoClumsy = (
    <div>
        <h1>Welcome, {userOneName}!</h1>
        <p>You are {userOneAge} years old.</p>
    </div>
);

// ✅ Clean Code Example 1
const userNameClean = "Amit";
const userAgeClean = 30;

const userInfoClean = (
    <div>
        <h1>Welcome, {userNameClean}!</h1>
        <p>You are {userAgeClean} years old.</p>
    </div>
);

// 🛑 Clumsy Code Example 2
function showMessageClumsy( name )
{
    if ( name !== "" )
    {
        console.log( "Hello " + name );
    } else
    {
        console.log( "Hello Stranger" );
    }
}

// ✅ Clean Code Example 2
const showMessageClean = ( userName ) =>
{
    const message = userName ? `Hello ${ userName }` : "Hello Stranger";
    console.log( message );
};

// 🛑 Clumsy Code Example 3
const calculateSumClumsy = ( x, y ) =>
{
    let result;
    if ( x !== undefined && y !== undefined )
    {
        result = x + y;
        return result;
    }
    return 0;
};

// ✅ Clean Code Example 3
const calculateSumClean = ( num1, num2 ) => ( num1 && num2 ? num1 + num2 : 0 );

// ✅ Output Examples
console.log( userInfoClean );
showMessageClean( "Amit" );
console.log( calculateSumClean( 5, 10 ) );

// =========================================
// End of File
// =========================================


/*
===============================================
🎯 React Most Used Terminologies - Notes
===============================================
*/

// ✅ 1. JSX (JavaScript XML)
const jsxDefinition = `
JSX is a syntax extension that allows writing HTML-like code inside JavaScript.
Example:
const element = <h1>Hello, World!</h1>;
`;

// ✅ 2. Components
const componentDefinition = `
Components are reusable, independent pieces of UI that return JSX to define the UI.
Types:
- Functional Component: Uses functions and hooks.
- Class Component: Uses ES6 classes.
Example:
function Header() {
  return <h1>Welcome to My App</h1>;
}
`;

// ✅ 3. Props (Properties)
const propsDefinition = `
Props allow passing data from a parent component to a child component.
Example:
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
`;

// ✅ 4. State
const stateDefinition = `
State is an object that holds dynamic data and controls the behavior of the component.
Example:
import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
`;

// ✅ 5. Hooks
const hooksDefinition = `
Hooks allow functional components to use state and other React features.
Common Hooks:
- useState: Manages state.
- useEffect: Handles side effects.
- useContext: Consumes context.
`;

// ✅ 6. Lifecycle Methods
const lifecycleDefinition = `
Lifecycle methods control the behavior of a component during its different phases.
Common Lifecycle Methods:
- componentDidMount(): Runs after component mounts.
- componentDidUpdate(): Runs after component updates.
- componentWillUnmount(): Runs before component unmounts.
`;

// ✅ 7. Virtual DOM
const vDomDefinition = `
A lightweight JavaScript representation of the real DOM that React uses to optimize rendering by comparing differences and applying only necessary changes.
`;

// ✅ 8. React Router
const routerDefinition = `
React Router is a library used for adding navigation and routing to React applications.
Example:
import { BrowserRouter, Route, Routes } from 'react-router-dom';
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>;
`;

// ✅ 9. Context API
const contextApiDefinition = `
A way to pass data through the component tree without manually passing props at every level.
Example:
const ThemeContext = React.createContext('light');
`;

// ✅ 10. Redux
const reduxDefinition = `
A state management library used for managing global application state.
Key Concepts:
- Store: Holds the state.
- Actions: Define state changes.
- Reducers: Update state based on actions.
`;

// ✅ 11. Higher-Order Component (HOC)
const hocDefinition = `
A function that takes a component and returns a new component with enhanced functionality.
Example:
function withLogging(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log('Component rendered');
    return <WrappedComponent {...props} />;
  };
}
`;

// ✅ 12. Controlled Component
const controlledDefinition = `
A component where form data is handled by React state.
Example:
function Form() {
  const [value, setValue] = useState('');
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}
`;

// ✅ 13. Uncontrolled Component
const uncontrolledDefinition = `
A component where form data is handled by the DOM itself.
Example:
function Form() {
  const inputRef = useRef(null);
  return <input ref={inputRef} />;
}
`;

// ✅ 14. Keys
const keysDefinition = `
Keys are used to uniquely identify list items and improve rendering performance.
Example:
const items = ['Apple', 'Banana', 'Cherry'];
const listItems = items.map((item, index) => <li key={index}>{item}</li>);
`;

// ✅ 15. Portals
const portalsDefinition = `
Portals allow rendering children components outside the parent DOM hierarchy.
Example:
ReactDOM.createPortal(<Child />, document.getElementById('portal-root'));
`;

// ✅ 16. Error Boundaries
const errorBoundaryDefinition = `
Error boundaries catch JavaScript errors anywhere in the component tree and log or display fallback UI.
Example:
class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {
    return this.props.children;
  }
}
`;

// ✅ 17. Fragments
const fragmentsDefinition = `
Fragments allow grouping multiple elements without adding extra nodes to the DOM.
Example:
<>
  <h1>Hello</h1>
  <p>World!</p>
</>
`;

// ✅ 18. Memoization
const memoDefinition = `
Optimization technique to cache and reuse results for expensive calculations.
Example:
const MemoizedComponent = React.memo(MyComponent);
`;

// ✅ 19. Prop Drilling
const propDrillingDefinition = `
Passing props down through multiple nested components, which may lead to unmanageable code.
Solution: Use Context API or Redux to avoid prop drilling.
`;

// ✅ 20. Render Props
const renderPropsDefinition = `
A pattern that uses a function as a child to pass data to components.
Example:
<Mouse render={(mouse) => <p>Mouse position: {mouse.x}, {mouse.y}</p>} />
`;

// ✅ 21. Hydration
const hydrationDefinition = `
The process of attaching event handlers to server-side rendered HTML on the client side.
`;

// ✅ 22. Strict Mode
const strictModeDefinition = `
A wrapper that highlights potential problems in a React application during development.
Example:
<React.StrictMode>
  <App />
</React.StrictMode>
`;

// ✅ 23. Concurrent Mode
const concurrentModeDefinition = `
Enables React to work on multiple tasks simultaneously to improve rendering performance.
`;

// ✅ 24. Suspense
const suspenseDefinition = `
Allows displaying fallback content while a component is loading.
Example:
<Suspense fallback={<div>Loading...</div>}>
  <MyComponent />
</Suspense>
`;

// ✅ 25. Lazy Loading
const lazyLoadingDefinition = `
Loads components lazily to improve initial page load performance.
Example:
const MyComponent = React.lazy(() => import('./MyComponent'));
`;

// ✅ Summary - Print All Notes
console.log(
    jsxDefinition,
    componentDefinition,
    propsDefinition,
    stateDefinition,
    hooksDefinition,
    lifecycleDefinition,
    vDomDefinition,
    routerDefinition,
    contextApiDefinition,
    reduxDefinition,
    hocDefinition,
    controlledDefinition,
    uncontrolledDefinition,
    keysDefinition,
    portalsDefinition,
    errorBoundaryDefinition,
    fragmentsDefinition,
    memoDefinition,
    propDrillingDefinition,
    renderPropsDefinition,
    hydrationDefinition,
    strictModeDefinition,
    concurrentModeDefinition,
    suspenseDefinition,
    lazyLoadingDefinition
);

/*
===============================================
✅ End of React Terminologies Notes
===============================================
*/
/*
===============================================
🎯 Difference Between JavaScript (JS) and JSX
===============================================
*/

// ✅ 1. Definition
const definitionJS = `
JavaScript (JS):
- JavaScript is a programming language that allows you to implement complex features on web pages.
- It is used to create dynamic and interactive web content.
`;

const definitionJSX = `
JSX (JavaScript XML):
- JSX is a syntax extension for JavaScript used with React to describe the UI structure.
- It looks similar to HTML but is transpiled to JavaScript.
`;

// ✅ 2. Syntax
const syntaxJS = `
JavaScript uses standard syntax to manipulate the DOM.
Example:
const element = document.createElement('h1');
element.innerText = 'Hello World!';
document.body.appendChild(element);
`;

const syntaxJSX = `
JSX allows you to write HTML-like syntax in JavaScript.
Example:
const element = <h1>Hello World!</h1>;
ReactDOM.render(element, document.getElementById('root'));
`;

// ✅ 3. Usage
const usageJS = `
JavaScript:
- Used to create logic, manage DOM, and handle user interactions.
- Can be used independently without any framework.
`;

const usageJSX = `
JSX:
- Used in React to describe the UI.
- It needs to be transpiled into plain JavaScript using Babel.
`;

// ✅ 4. Variables and Expressions
const variablesJS = `
In JavaScript, variables are used directly in operations.
Example:
let name = 'Amit';
console.log('Hello ' + name);
`;

const variablesJSX = `
In JSX, variables and expressions are inserted using curly braces {}.
Example:
const name = 'Amit';
const element = <h1>Hello, {name}!</h1>;
`;

// ✅ 5. Event Handling
const eventJS = `
JavaScript uses traditional DOM event handling.
Example:
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  alert('Button Clicked!');
});
`;

const eventJSX = `
JSX uses camelCase for event handlers.
Example:
function App() {
  const handleClick = () => alert('Button Clicked!');
  return <button onClick={handleClick}>Click Me</button>;
}
`;

// ✅ 6. Conditional Rendering
const conditionalJS = `
JavaScript uses if-else and ternary operators.
Example:
let isLoggedIn = true;
if (isLoggedIn) {
  console.log('Welcome Back!');
} else {
  console.log('Please Sign In.');
}
`;

const conditionalJSX = `
JSX uses conditional rendering inside braces {}.
Example:
const isLoggedIn = true;
const element = isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Sign In.</h1>;
`;

// ✅ 7. Styling
const stylingJS = `
JavaScript uses CSS to apply styles.
Example:
document.getElementById('myDiv').style.color = 'red';
`;

const stylingJSX = `
JSX uses inline styles as JavaScript objects.
Example:
const divStyle = { color: 'red', fontSize: '20px' };
const element = <div style={divStyle}>Hello World!</div>;
`;

// ✅ 8. Looping/Iteration
const loopJS = `
JavaScript uses for loops to iterate.
Example:
for (let i = 0; i < 5; i++) {
  console.log(i);
}
`;

const loopJSX = `
JSX uses map() to iterate and create elements.
Example:
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((num) => <li key={num}>{num}</li>);
`;

// ✅ 9. Comments
const commentsJS = `
JavaScript uses // for single-line comments and /* */ for multi-line comments.
Example:
// This is a single-line comment
/* This is a multi-line comment */
`;

const commentsJSX = `
JSX uses curly braces and comments must be wrapped inside them.
Example:
{/* This is a comment in JSX */}
`;

// ✅ 10. Error Handling
const errorHandlingJS = `
JavaScript uses try-catch for error handling.
Example:
try {
  console.log(undefinedVariable);
} catch (error) {
  console.log('Error occurred:', error.message);
}
`;

const errorHandlingJSX = `
JSX itself does not handle errors.
Error boundaries in React handle errors in JSX.
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

// ✅ 11. Compilation
const compilationJS = `
JavaScript:
- JavaScript runs directly in the browser or server.
- No transpilation required.
`;

const compilationJSX = `
JSX:
- JSX must be transpiled to JavaScript using Babel before running.
- It is not understood directly by browsers.
`;

// ✅ 12. Flexibility
const flexibilityJS = `
JavaScript:
- Can be used with any frontend or backend technology.
- Provides flexibility in terms of frameworks and libraries.
`;

const flexibilityJSX = `
JSX:
- Used primarily with React to create UI components.
- Tightly coupled with React's ecosystem.
`;

// ✅ Summary
const summary = `
===============================================
📚 Summary: JS vs JSX
===============================================
1. JS is a scripting language; JSX is a syntax extension for JavaScript.
2. JS manipulates DOM directly; JSX uses virtual DOM.
3. JSX must be transpiled using Babel; JS runs natively.
4. JSX is mainly used in React, while JS is more versatile.
===============================================
`;

// ✅ Print All Notes
console.log(
    definitionJS,
    definitionJSX,
    syntaxJS,
    syntaxJSX,
    usageJS,
    usageJSX,
    variablesJS,
    variablesJSX,
    eventJS,
    eventJSX,
    conditionalJS,
    conditionalJSX,
    stylingJS,
    stylingJSX,
    loopJS,
    loopJSX,
    commentsJS,
    commentsJSX,
    errorHandlingJS,
    errorHandlingJSX,
    compilationJS,
    compilationJSX,
    flexibilityJS,
    flexibilityJSX,
    summary
);

/*
===============================================
✅ End of JS vs JSX Notes
===============================================
*/
