import "./App.css";
import { palavrasDadas, palavrasLixadas, palavrasPuxadas } from "./palavras";
import Palavra from "./Palavra";
import { useEffect } from "react";

const pegaTrêsRandom = (array) => {
  // Shuffle array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Pick a random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }

  // Get sub-array of first 4 elements after shuffled
  return array.slice(0, 4);
};

function setRealVh() {
  // Get the current height of the viewport
  let vh = window.innerHeight * 0.01;
  // Set the CSS variable --vh to the calculated value
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function App() {
  const dadas = pegaTrêsRandom(palavrasDadas);
  const lixadas = pegaTrêsRandom(palavrasLixadas);
  const puxadas = pegaTrêsRandom(palavrasPuxadas);

  useEffect(() => {
    setRealVh();

    window.addEventListener("resize", setRealVh);

    return () => window.removeEventListener("resize", setRealVh); // Call this to remove it
  }, []);

  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=VT323&display=swap');
      </style>

      <div className="container container-dadas">
        <h2 className="dadas">dadas x1</h2>
        <ul>
          {dadas.map((palavra, i) => (
            <Palavra key={i} palavra={palavra} />
          ))}
        </ul>
      </div>

      <div className="container container-puxadas">
        <h2 className="puxadas">puxadas x2</h2>
        <ul>
          {puxadas.map((palavra, i) => (
            <Palavra key={i} palavra={palavra} />
          ))}
        </ul>
      </div>

      <div className="container container-lixadas">
        <h2 className="lixadas">lixadas x3</h2>
        <ul>
          {lixadas.map((palavra, i) => (
            <Palavra key={i} palavra={palavra} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
