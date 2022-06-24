import { useState } from 'react';
import { useParams } from 'react-router-dom'

function Aluno({ todosAlunos }) {
    console.log(todosAlunos) //array inteira com todas as informações

    const { aluno } = useParams()
    console.log(aluno) // é o nome do aluno que entrou na pagina

    //eu vou fazer um filter pelo nome da pessoa que entrou na pagina 
    // em cima da array com TODOS os alunos 
    // pra descobrir as informações que eu quero renderizar

    return (
        <div>
            {todosAlunos
                .filter((currentElement) => {
                    return currentElement.nome === aluno
                })
                .map((currentElement) => {
                    return (
                        <div>
                            <p>Nome: {currentElement.nome}</p>
                            <p>Sobrenome: {currentElement.sobrenome}</p>
                            <p>Idade: {currentElement.idade}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Aluno;