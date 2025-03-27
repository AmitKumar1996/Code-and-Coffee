import { useState, useEffect } from "react";

function App()
{
  const [ color, setColor ] = useState( "olive" );

  useEffect( () =>
  {
    console.log( "Color Updated:", color );
  }, [ color ] ); // Logs only when color updates

  return (
    <div
      key={color} // Forces re-render
      className="w-full h-screen"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {[ "red", "green", "blue", "orange", "pink", "yellow", "skyblue", "palegreen", "salmon", "teal", "paleturquoise" ].map( ( c ) => (
            <button
              key={c}
              onClick={() => setColor( c )}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: c }}
            >
              {c.charAt( 0 ).toUpperCase() + c.slice( 1 )}
            </button>
          ) )}
        </div>
      </div>
    </div>
  );
}

export default App;
