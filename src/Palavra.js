import "./Palavra.css";
import { useState } from "react";

function Palavra({ palavra }) {
  const [contador, setContador] = useState(0);
  const [riscada, setRiscada] = useState(false);

  const aumentaContador = () => {
    setContador((contador) => contador + 1);
    setRiscada(true);
  };

  const diminuiContador = () => {
    if (contador === 0) {
      return;
    }

    setContador((contador) => contador - 1);

    if (contador === 1) {
      setRiscada(false);
    }
  };

  return (
    <div className="wrapper">
      <button
        disabled={contador === 0}
        className="button-30"
        onClick={diminuiContador}
      >
        -
      </button>

      <div className="wrapper-palavra">
        <p className={`palavra ${riscada ? "riscada" : ""}`}>{palavra}</p>

        <span className="contador">
          contador: <span className="contador-numero">{contador}</span>
        </span>
      </div>

      <button className="button-30" onClick={aumentaContador}>
        +
      </button>
    </div>
  );
}

export default Palavra;
