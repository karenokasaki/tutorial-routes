

export function Tulio({nomeCompleto, turma}) {



    //até aqui é javascript PURO
    return (
        /* daqui pra baixo é JSX */
        <>
            <div>
                Meu nome é: {nomeCompleto}
                <p>Minha TA preferida é a: {turma[0]}</p>
            </div>
        </>
    )
}