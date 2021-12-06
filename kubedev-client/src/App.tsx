import { useState } from "react";
import "./App.css";

async function fetchNames() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/names`);
  const names: string[] = await response.json();
  return names;
}

function App() {
  const [names, setNames] = useState<string[]>([]);

  async function handleFetchClick() {
    const newNames = await fetchNames();
    setNames((oldNames) => [...oldNames, ...newNames]);
  }

  async function handleClearClick() {
    setNames([]);
  }

  return (
    <div className="app">
      <button onClick={handleFetchClick}>fetch</button>
      <button onClick={handleClearClick}>clear</button>
      <br />
      {`${names.length} words`}
      <br />
      <ul className="list">
        {names.map((name) => {
          return (
            <li key={name} className="item">
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
