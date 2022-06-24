import foods from "./foods.json"
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import Aluno from "./pages/Aluno"

function App() {

  const [todosAlunos, setTodosALunos] = useState([
    { nome: "karen", sobrenome: 'Okasaki', idade: 28 },
    { nome: "tathy", sobrenome: 'Silva', idade: 28 },
    { nome: "tulio", sobrenome: 'Okasaki', idade: 28 },
    { nome: "daniel", sobrenome: 'Okasaki', idade: 28 },
    { nome: "adriano", sobrenome: 'Okasaki', idade: 28 },
    { nome: "angelo", sobrenome: 'Martins', idade: 28 },
  ])

  return (
    <>

      <Routes>
        <Route path={"/"} element={<Home todosAlunos={todosAlunos} />} />
        <Route path={"/:aluno"} element={<Aluno todosAlunos={todosAlunos} />} />

      </Routes>

    </>
  );
}

export default App;