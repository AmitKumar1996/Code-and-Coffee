import { useEffect, useState } from "react";

function useCurrencyInfo( currency )
{
    const [ data, setData ] = useState( {} )
    useEffect( () =>
    {
        fetch( `https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/{fromCurrency}
`).then( ( res ) => res.json() ).then( ( res ) => setData( res[ currency ] ) )
        console.log( data );

    }, [] )
}