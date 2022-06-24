import { useState } from "react"
import { Multiplicador } from "../Multiplicador"

export function Contador({ number, setNumber, setName }) {


    function diminuir() {
        //number--
        setNumber(number - 1)
        setName("tulio")
    }

    function aumentar() {
        setNumber(number + 1)
        setName("angelo")
    }

    return (
        <>
            <p>O Contador está no numero: {number}</p>
            <button onClick={diminuir}> DIMINUIR </button>
            <button onClick={aumentar}> AUMENTAR </button>

        </>


    )
}