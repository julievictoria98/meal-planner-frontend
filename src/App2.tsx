import { useState } from "react";
function ExtraHTML() {
  return <div>Hej mit navn er Kaj</div>;
}

/*Dette er en React Component function
  Din main react component function for en fil, skal altid hedde det samme som filnavnet.
  Den skal altid starte med stort bogstav
  En component function skal ALTID returnere noget HTML.

*/
function App() {
  const [count, setCount] = useState(10); //en state bruges når en varibel skal ændres dynamisk i siden
  //måden man opretter en state, er ved først at skrive const (altid), efterfulgt af [], indeni [], har vi ALTID 2 argumenter.
  //Den første, er selve variablen for staten.
  //Den anden, er den metode vi kan bruge til at opdatere variblen for staten.
  //Efter [] sætter vi = useState()
  //indeni i (), sætter vi den værdi af staten som der er i udgangspunktet.

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count * 2)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-4 bg-blue-500">
        Click on the Vite and React logos to learn more
      </p>
      <ExtraHTML />
    </>
  );
}

export default App;
