function customRender( reactElement, container )
{   /*
    // Create a DOM element based on the type specified in reactElement
    const domElement = document.createElement( reactElement.type );

    // Set the inner HTML (children) of the DOM element
    domElement.innerHTML = reactElement.children;

    // Set attributes from props
    domElement.setAttribute( 'href', reactElement.props.href );
    domElement.setAttribute( 'target', reactElement.props.target );

    // Append the DOM element to the container
    container.appendChild( domElement );
    */

    const domElement = document.createElement( reactElement.type )
    domElement.innerHTML = reactElement.children

    for ( const prop in reactElement.props )
    {
        if ( prop === 'children' ) continue;
        domElement.setAttribute( prop, reactElement.props[ prop ] )


    }
    container.appendChild( domElement )
}

// Define the reactElement object
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google' // Corrected property name
};

// Find the root container in the DOM
const mainContainer = document.querySelector( '#root' );

// Check if the root container exists
if ( mainContainer )
{
    customRender( reactElement, mainContainer );
} else
{
    console.error( 'Root container not found!' );
}