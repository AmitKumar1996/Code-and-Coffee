import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

function MyApp()
{
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}
/*
// Correct ReactElement (Object Format)
const ReactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
    children: 'click me to visit google', // Corrected property name
  },
};
*/
const AeactElement = React.createElement(
  'a',
  { href: "https://google.com", target: '_blank' },
  'click me to visit google'
)

// JSX equivalent of the above
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

// Render using createRoot (corrected)
const root = createRoot( document.getElementById( 'root' ) );
root.render(
  <StrictMode>
    {anotherElement}

  </StrictMode>
);
