import "./Palavra.css";
import { useState } from "react";

function Palavra({ palavra }) {
  const [contador, setContador] = useState(0);
  const [riscada, setRiscada] = useState(false);

  return (
    <div className="wrapper">
      <p
        onClick={() => setRiscada(!riscada)}
        className={`palavra ${riscada ? "riscada" : ""}`}
      >
        {palavra}
      </p>
      <div className="contador">
        <button className="button-30" onClick={() => setContador(contador - 1)}>
          -
        </button>
        <span>{contador}</span>
        <button className="button-30" onClick={() => setContador(contador + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default Palavra;
