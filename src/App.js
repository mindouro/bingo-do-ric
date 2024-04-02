import "./App.css";
import { palavrasDadas, palavrasLixadas, palavrasPuxadas } from "./palavras";
import Palavra from "./Palavra";

const pegaTrêsRandom = (array) => {
  // Shuffle array
  const shuffled = array.sort(() => 0.5 - Math.random());

  // Get sub-array of first 4 elements after shuffled
  return shuffled.slice(0, 4);
};

function App() {
  const dadas = pegaTrêsRandom(palavrasDadas);
  const lixadas = pegaTrêsRandom(palavrasLixadas);
  const puxadas = pegaTrêsRandom(palavrasPuxadas);

  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=VT323&display=swap')
      </style>

      <div className="container">
        <h2 className="dadas">dadas x1</h2>
        <ul>
          {dadas.map((palavra, i) => (
            <Palavra key={i} palavra={palavra} />
          ))}
        </ul>
      </div>
      <div className="container">
        <h2 className="puxadas">puxadas x2</h2>
        <ul>
          {puxadas.map((palavra, i) => (
            <Palavra key={i} palavra={palavra} />
          ))}
        </ul>
      </div>
      <div className="container">
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
