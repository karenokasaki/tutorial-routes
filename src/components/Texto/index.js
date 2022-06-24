

export function Texto(props) {
    console.log(props)
    return (
        <>
            <div>essa é a minha risada: {props.risada}</div>
            <div>essa é a minha idade: {props.idade}</div>
        </>
    )
}