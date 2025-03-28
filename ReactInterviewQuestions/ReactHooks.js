/**
 * ==========================================
 * 🎣 React Hooks - Comprehensive Guide
 * ==========================================
 */

// ✅ 1. useState()
// Manages state in functional components.
import React, { useState, useEffect, useContext, useRef, useReducer, useMemo, useCallback, useLayoutEffect, useImperativeHandle, createContext, forwardRef } from "react";

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

// ✅ 2. useEffect()
// Performs side effects after rendering.
function Timer()
{
    const [ count, setCount ] = useState( 0 );

    useEffect( () =>
    {
        console.log( "Component updated!" );
    }, [ count ] ); // Runs when `count` changes

    return (
        <div>
            <p>Timer: {count}</p>
            <button onClick={() => setCount( count + 1 )}>Start Timer</button>
        </div>
    );
}

// ✅ 3. useContext()
// Consumes values from a Context.
const UserContext = createContext();

function UserInfo()
{
    const user = useContext( UserContext );
    return <h1>Welcome, {user.name}!</h1>;
}

function AppContext()
{
    return (
        <UserContext.Provider value={{ name: "Amit" }}>
            <UserInfo />
        </UserContext.Provider>
    );
}

// ✅ 4. useRef()
// Holds mutable values that persist across renders.
function FocusInput()
{
    const inputRef = useRef( null );

    useEffect( () =>
    {
        inputRef.current.focus(); // Auto-focus input
    }, [] );

    return <input ref={inputRef} type="text" placeholder="Type here..." />;
}

// ✅ 5. useReducer()
// Manages complex state logic.
const initialState = { count: 0 };

function reducer( state, action )
{
    switch ( action.type )
    {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            throw new Error( "Invalid action" );
    }
}

function CounterReducer()
{
    const [ state, dispatch ] = useReducer( reducer, initialState );

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch( { type: "increment" } )}>+</button>
            <button onClick={() => dispatch( { type: "decrement" } )}>-</button>
        </div>
    );
}

// ✅ 6. useMemo()
// Memoizes computed values for performance.
function ExpensiveCalculation( { num } )
{
    const calculateFactorial = ( n ) =>
    {
        console.log( "Calculating..." );
        return n <= 1 ? 1 : n * calculateFactorial( n - 1 );
    };

    const factorial = useMemo( () => calculateFactorial( num ), [ num ] );

    return <p>Factorial of {num} is {factorial}</p>;
}

// ✅ 7. useCallback()
// Memoizes a function to prevent re-creation.
function Button( { handleClick } )
{
    return <button onClick={handleClick}>Click Me</button>;
}

function AppCallback()
{
    const [ count, setCount ] = useState( 0 );

    const handleClick = useCallback( () =>
    {
        setCount( ( prev ) => prev + 1 );
    }, [] );

    return (
        <div>
            <p>Count: {count}</p>
            <Button handleClick={handleClick} />
        </div>
    );
}

// ✅ 8. useLayoutEffect()
// Runs synchronously after DOM updates.
function LayoutEffectExample()
{
    const divRef = useRef( null );
    const [ height, setHeight ] = useState( 0 );

    useLayoutEffect( () =>
    {
        setHeight( divRef.current.clientHeight );
    }, [] );

    return (
        <div ref={divRef}>
            <p>Height: {height}px</p>
        </div>
    );
}

// ✅ 9. useImperativeHandle()
// Customizes the instance value exposed to the parent.
const CustomInput = forwardRef( ( props, ref ) =>
{
    const inputRef = useRef( null );

    useImperativeHandle( ref, () => ( {
        focus: () =>
        {
            inputRef.current.focus();
        },
    } ) );

    return <input ref={inputRef} type="text" />;
} );

function AppImperativeHandle()
{
    const inputRef = useRef( null );

    return (
        <div>
            <CustomInput ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>Focus Input</button>
        </div>
    );
}

// ✅ 10. Custom Hook - useFetch()
// Fetches data from an API.
function useFetch( url )
{
    const [ data, setData ] = useState( null );

    useEffect( () =>
    {
        async function fetchData()
        {
            const response = await fetch( url );
            const result = await response.json();
            setData( result );
        }
        fetchData();
    }, [ url ] );

    return data;
}

// Usage of Custom Hook
function AppFetch()
{
    const data = useFetch( "https://jsonplaceholder.typicode.com/posts" );

    return (
        <div>
            <h1>Data from API:</h1>
            {data && data.map( ( item ) => <p key={item.id}>{item.title}</p> )}
        </div>
    );
}

/**
 * ===============================
 * 🎯 Summary of All Hooks
 * ===============================
 *
 * 1. useState()           - Manages state in functional components.
 * 2. useEffect()          - Performs side effects after rendering.
 * 3. useContext()         - Consumes values from a Context.
 * 4. useRef()             - Holds mutable values and references DOM.
 * 5. useReducer()         - Manages complex state logic.
 * 6. useMemo()            - Memoizes computed values for performance.
 * 7. useCallback()        - Memoizes a function to prevent re-creation.
 * 8. useLayoutEffect()    - Synchronously runs after DOM updates.
 * 9. useImperativeHandle() - Customizes ref instance.
 * 10. Custom Hook         - Extracts and reuses component logic.
 */

export
{
    Counter,
    Timer,
    AppContext,
    FocusInput,
    CounterReducer,
    ExpensiveCalculation,
    AppCallback,
    LayoutEffectExample,
    AppImperativeHandle,
    AppFetch,
};
