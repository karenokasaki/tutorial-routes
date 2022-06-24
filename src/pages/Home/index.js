import { Link } from 'react-router-dom'

function Home({ todosAlunos }) {


    return (
        <div>
            {todosAlunos.map((aluno) => {
                return (
                    <div>
                        <Link to={`/${aluno.nome}`}>{aluno.nome}</Link>
                    </div>
                )
            })}
        </div>
    );
}

export default Home;
