
// ============================================
// React Notes - When to Use and How to Use React
// ============================================

// When to Use React
// 1. Single-Page Applications (SPAs)
// React is ideal for building SPAs where the page doesn't reload, and content is dynamically updated based on user interactions.
// Examples: Social media platforms (e.g., Facebook), dashboards, e-commerce sites.

// 2. Dynamic and Interactive UIs
// Use React when your application requires frequent updates to the UI based on user actions or data changes.
// Examples: Real-time chat apps, live data dashboards, or collaborative tools.

// 3. Reusable Components
// React is perfect for projects where you need to reuse UI components across different parts of the application.
// Examples: Buttons, forms, modals, or navigation bars.

// 4. Large-Scale Applications
// React's component-based architecture makes it easier to manage and scale large applications.
// Examples: Enterprise-level applications, content management systems (CMS), or SaaS platforms.

// 5. Cross-Platform Development
// React can be used with React Native to build mobile applications for iOS and Android, making it a great choice for cross-platform development.

// 6. Fast Rendering with Virtual DOM
// React's Virtual DOM ensures efficient updates and rendering, making it suitable for applications with complex UIs and high performance requirements.

// ============================================
// How to Use React
// ============================================

// 1. Setting Up a React Project
// Use tools like create-react-app or Vite to quickly set up a React project.
// bash
// npx create-react-app my-app
// cd my-app
// npm start

// 2. Creating Components
// Break your UI into reusable components.

// Functional Component Example
function Header()
{
  return <h1>Welcome to My App</h1>;
}

// Class Component Example (less common in modern React)
class Header extends React.Component
{
  render()
  {
    return <h1>Welcome to My App</h1>;
  }
}

// 3. Using JSX
// JSX is a syntax extension for JavaScript that allows you to write HTML-like code in React.
function Greeting()
{
  return <h1>Hello, World!</h1>;
}

// 4. Managing State
// Use the useState hook to manage state in functional components.
import React, { useState } from 'react';

function Counter()
{
  const [ count, setCount ] = useState( 0 );

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount( count + 1 )}>Increment</button>
    </div>
  );
}

// 5. Handling Events
// Use camelCase for event handlers (e.g., onClick, onChange).
function Button()
{
  const handleClick = () =>
  {
    alert( 'Button clicked!' );
  };

  return <button onClick={handleClick}>Click Me</button>;
}

// 6. Working with Props
// Props are used to pass data from a parent component to a child component.
function Greeting( props )
{
  return <h1>Hello, {props.name}!</h1>;
}

function App()
{
  return <Greeting name="Amit" />;
}

// 7. Using Hooks
// Hooks allow functional components to use state and lifecycle features.
import React, { useState, useEffect } from 'react';

function DataFetcher()
{
  const [ data, setData ] = useState( [] );

  useEffect( () =>
  {
    fetch( 'https://api.example.com/data' )
      .then( ( response ) => response.json() )
      .then( ( data ) => setData( data ) );
  }, [] );

  return (
    <ul>
      {data.map( ( item ) => (
        <li key={item.id}>{item.name}</li>
      ) )}
    </ul>
  );
}

// 8. Routing with React Router
// Use react-router-dom to handle navigation in a React app.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App()
{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

// 9. Styling in React
// Use inline styles, CSS modules, or libraries like styled-components.
// Example of CSS Modules:
import styles from './MyComponent.module.css';

function MyComponent()
{
  return <div className={styles.myClass}>Hello, World!</div>;
}

// 10. State Management
// For larger applications, use state management libraries like Redux or Context API.
// Example of Context API:
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

function App()
{
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar()
{
  const theme = useContext( ThemeContext );
  return <div>Current Theme: {theme}</div>;
}

// 11. Building and Deploying
// Build the app for production:
// bash
// npm run build
// Deploy to platforms like Netlify, Vercel, or GitHub Pages.

// ============================================
// When NOT to Use React
// ============================================

// Simple Static Websites
// For static websites with minimal interactivity, React might be overkill. Use plain HTML, CSS, and JavaScript instead.

// SEO-Critical Websites
// React apps are rendered on the client side, which can be problematic for SEO. Use server-side rendering (SSR) frameworks like Next.js if SEO is a priority.

// Tight Deadlines for Small Projects
// For small projects with tight deadlines, using React might slow you down due to its learning curve and setup time.

// ============================================
// Summary
// ============================================
// Use React for building dynamic, interactive, and scalable applications.
// Follow best practices like component reusability, state management, and efficient rendering.
// Avoid React for simple static websites or projects where its complexity isn't justified.
