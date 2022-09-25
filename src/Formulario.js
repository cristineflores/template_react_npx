import { useState } from "react";

function Formulario() {
    const [nome, setNome] = useState('Teste');
    const [idade, setIdade] = useState('ver');


    function cadastrar() {
        const rejex = /[0-9]/;
        if (nome.length === 0) {
            alert('Nome em branco. Digite o nome!')
        } else if(rejex.test(nome)) {
            alert ('Nome não pode conter números!')
        } else if (idade < 18) {
            alert('Menor de idade. Idade não aceita!')
        } else {
            alert('Cadastrado com sucesso!')
        }
    }
    
    return (
        <div>
            <h1>Formulário</h1>
            <h1>{nome}</h1>
            <input onChange={(e) => {setNome(e.target.value)}} placeholder="Nome" value={nome} />
            <h1>{idade}</h1>
            <input onChange={(e) => {setIdade(e.target.value)}} placeholder="Idade" value={idade} type="number"/>
            <button onClick={cadastrar}>Cadastrar</button>
        </div>
    );
}
  
  export default Formulario;
  