import { useState } from "react";
export function Contador() {
    const [contador, setContador] = useState(0);
    return (
        <div className="contador">
            <h2>Contador</h2>
            <p>{contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
            <button onClick={() => setContador(0)}>Reiniciar</button>
        </div>
    );
}