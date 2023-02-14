//import ButtonEnviar from './Components/buttonEnviar/ButtonEnviar.jsx'
import "./App.css";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Cadastro from "./Pages/Cadastros/cadastro";

import Tabela from "./Pages/consultas/tabela";
import Inicio from "./Pages/Inicio/inicio.jsx";
import TabelaEndereco from "./Pages/consultas/tabelaEndereco";

function App() {
  // Objeto cliente
  const cliente = { //cliente
    id_cliente: 0,
    nome: "",
    email: "",
    cpf: "",
  };

  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [clientes, setCliente] = useState([]);
  const [objCliente, setObjCliente] = useState(cliente);

  // UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listarCliente")
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
    fetch("http://localhost:8080/cadastrarCliente", {
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
    fetch("http://localhost:8080/alterarCliente", {
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




  // Remover Endereco
  const removerEndereco = () => {
    fetch("http://localhost:8080/removerEndereco/" + objEndereco.id_endereco, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        // mensagem
        alert("Endereco removida com sucesso." + retorno_convertido.mensagem);

        //copia do vetor de Endereco
        let vetorTemp = [...enderecos];

        // indice
        let indices = vetorTemp.findIndex((p) => {
          return p.id_endereco === objEndereco.id_endereco;
        });

        // remover Endereco do vetorTemp
        vetorTemp.splice(indices, 1);

        // atualizar o vetor de Endereco
        setCliente(vetorTemp);

        limparFormulario();
      });
  };





  // Objeto endereco
  const endereco = {  //endereco
    id_endereco: 0,
    id_cliente: 0,
    nome: "",
    logradouro: "",
    bairro: "",
    cep: 0,
    numero: 0,
    cidade: "",
    uf: "",
  };

  // UseState
  const [btnCadastrarEnd, setBtnCadastrarEnd] = useState(true);
  const [enderecos, setEndereco] = useState([]);
  const [objEndereco, setObjEndereco] = useState(endereco);

  // UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listarEndereco")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setEndereco(retorno_convertido));
  }, []);

  // Obtendo os dados do formulário
  const aoDigitarEnd = (e) => {
    setObjEndereco({ ...objEndereco, [e.target.name]: e.target.value });
    console.log(e.target);
  };

  // Selecionar Endereco
  const selecionarEndereco = (indices) => {
    setObjEndereco(enderecos[indices]);
    setBtnCadastrarEnd(false);
  };

  // Cadastrar Endereco
  const cadastrarEndereco = () => {
    fetch("http://localhost:8080/cadastrarEndereco", {
      method: "post",
      body: JSON.stringify(objEndereco),
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
          setEndereco([...enderecos, retorno_convertido]);
          alert("Endereco cadastrado com sucesso!");
          limparFormularioEnd();
        }
      });
  };

  // Alterar Endereco
  const alterarEndereco = () => {
    fetch("http://localhost:8080/alterarEndereco", {
      method: "put",
      body: JSON.stringify(objEndereco),
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
          alert("Endereco alterado com sucesso!");

          //copia do vetor de Endereco
          let vetorTemp = [...enderecos];

          // indice
          let indices = vetorTemp.findIndex((p) => {
            return p.id_endereco === objEndereco.id_endereco;
          });

          // alterar cliente do vetorTemp
          vetorTemp[indices] = objEndereco;

          // atualizar o vetor de Endereco
          setEndereco(vetorTemp);

          limparFormulario();
        }
      });
  };

  //Limpar fomulario
  const limparFormularioEnd = () => {
    setObjEndereco(endereco);
    setBtnCadastrarEnd(true);

    document.location.reload(true);
  };

  

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Cadastro
              evento={aoDigitar}
              eventoEnd={aoDigitarEnd}
              cadCliente={cadastrarCliente}
              cadEndereco={cadastrarEndereco}
              objCliente={objCliente}
              objEnd={objEndereco}
              selecionar={selecionarCliente}
              selecionarEndereco={selecionarEndereco}
              vetor={clientes}
              vetorEnd={enderecos}
              altCliente={alterarCliente}
              altEndereco={alterarEndereco}
              rmvCliente={removerCliente}
              rmvEndereco={removerEndereco}
              botao={btnCadastrar}
              botaoEnd={btnCadastrarEnd}
            />
          }
        />
        <Route
          path="/Consulta"
          element={<Tabela vetor={clientes} selecionar={selecionarCliente} />}
        />
        <Route
          path="/ConsultaEndereco"
          element={
            <TabelaEndereco vetor={enderecos} selecionar={selecionarEndereco} />
          }
        />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
