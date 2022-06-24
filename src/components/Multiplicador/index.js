import { useState } from "react";

export function Multiplicador({ number, setName }) {

    const [result, setResult] = useState(0)

    function multiplicar() {
        setResult(number * 5)
        setName('Tathyanna')
    }


    return (
        <>
            <h1>Esse multiplicador vai pegar o numero que estiver no CONTADOR e multiplicar por 5</h1>
            <p>Temos que pegar a variável number e multiplicar ela por 5</p>
            <p>Resultado: {result}</p>
            <button onClick={multiplicar}>Multiplicar o contador!</button>

        </>
    );
}

