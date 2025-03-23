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