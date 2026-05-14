import { useState } from "react";
export function Contador() {
    const [contador, setContador] = useState(0);
    return (
        <div className="contador">
            <h2>Contador interactivo</h2>
            <p style={{ color: contador === 0 ? "red" : "green" }}>{contador}</p>
            
            <button onClick={() => setContador(contador + 1)}><i class="fa-solid fa-plus"></i></button>
            <button onClick={() => setContador(contador - 1)} disabled={contador===0}><i class="fa-solid fa-minus"></i></button>
            <button onClick={() => setContador(0)}><i class="fa-solid fa-arrow-rotate-left"></i></button>
        </div>
    );
}