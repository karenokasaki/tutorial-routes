import { useState } from "react"

function FormAluno({ todosAlunos, setTodosAlunos }) {
    //criar UM STATE o form
    const [form, setForm] = useState({
        name: '',
        sobrenome: '',
        idade: ''
    })

    //fazer a função pra atualizar o form
    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    //fazer a função pra salvar o form
    function handleSubmit(event) {
        event.preventDefault()
        setTodosAlunos([...todosAlunos, form])
        setForm({
            name: '',
            sobrenome: '',
            idade: ''
        })
    }

    //fazer os inputs com os atributos "name" iguais as do form
    return (
        <>
            <form>
                <label>Nome:</label>
                <input name="name" onChange={handleChange} value={form.name}/>
                <label>Sobrenome:</label>
                <input name="sobrenome" onChange={handleChange} value={form.sobrenome} />
                <label>Idade:</label>
                <input name="idade" onChange={handleChange} value={form.idade}/>
                <button onClick={handleSubmit}>Salvar!</button>
            </form>
        </>);
}

export default FormAluno;