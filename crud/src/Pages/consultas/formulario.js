import React, { useEffect, useState } from "react";
import Tabela from "./tabela";

function Formulario() {
  // Objeto cliente
  const cliente = {
    id_cliente: 0,
    nome_cliente: "",
    idade_cliente: 0,
  };

  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const botao = btnCadastrar;
  const [clientes, setCliente] = useState([]);
  const [objCliente, setObjCliente] = useState(cliente);

  // UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setCliente(retorno_convertido));
  }, []);

  // Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjCliente({ ...objCliente, [e.target.name]: e.target.value });
    console.log(e.target);
  };


   // Selecionar cliente
   const selecionarCliente = (indice) => {
    setObjCliente(clientes[indice]);
    setBtnCadastrar(false);
  };



  // Cadastrar cliente
  const cadastrarCliente = () => {
    fetch("http://localhost:8080/cadastrar", {
      method: "post",
      body: JSON.stringify(objCliente),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          setCliente([...clientes, retorno_convertido]);
          alert("Cliente cadastrado com sucesso!");
          limparFormulario();
        }
      });
  };

  // Alterar cliente
  const alterarCliente = () => {
    fetch("http://localhost:8080/alterar", {
      method: "put",
      body: JSON.stringify(objCliente),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          alert("Cliente alterado com sucesso!");

          //copia do vetor de clientes
          let vetorTemp = [...clientes];

          // indice
          let indice = vetorTemp.findIndex((p) => {
            return p.id_cliente === objCliente.id_cliente;
          });

          // alterar cliente do vetorTemp
          vetorTemp[indice] = objCliente;

          // atualizar o vetor de clientes
          setCliente(vetorTemp);

          limparFormulario();
        }
      });
  };

  //Limpar fomulario
  const limparFormulario = () => {
    setObjCliente(cliente);
    setBtnCadastrar(true);

    document.location.reload(true);
  };


// Remover cliente
const removerCliente = () => {
    fetch("http://localhost:8080/removerCliente/" + objCliente.id_cliente, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        // mensagem
        alert("Cliente removido com sucesso." + retorno_convertido.mensagem);

        //copia do vetor de clientes
        let vetorTemp = [...clientes];

        // indice
        let indice = vetorTemp.findIndex((p) => {
          return p.id_cliente === objCliente.id_cliente;
        });

        // remover cliente do vetorTemp
        vetorTemp.splice(indice, 1);

        // atualizar o vetor de clientes
        setCliente(vetorTemp);

        limparFormulario();
      });
  };



  //retorno
  return (
    <>
      <form>
        <input
          type="text"
          value={objCliente.nome_cliente}
          onChange={aoDigitar}
          name="nome_cliente"
          placeholder="nome"
        />
        <input
          type="number"
          value={objCliente.idade_cliente}
          onChange={aoDigitar}
          name="idade_cliente"
          placeholder="idade"
        />

        {botao ? (
          <input type="button" value="cadastrar" onClick={cadastrarCliente} />
        ) : (
          <div>
            <input type="button" value="alterar" onClick={alterarCliente} />
            <input type="button" value="remover" onClick={removerCliente}/>
            <input type="button" value="cancelar" />
          </div>
        )}
      </form>
      <div>
        <Tabela vetor={clientes} selecionar={selecionarCliente} />
      </div>
      ;
    </>
  );
}

export default Formulario;
