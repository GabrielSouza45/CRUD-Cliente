//import ButtonEnviar from './Components/buttonEnviar/ButtonEnviar.jsx'
import "./App.css";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Cadastro from "./Pages/Cadastros/cadastro";

import Tabela from "./Pages/consultas/tabela";
import Inicio from "./Pages/Inicio/inicio.jsx";
import TabelaMusica from "./Pages/consultas/tabelaMusica";

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




  // Remover Musica
  const removerMusica = () => {
    fetch("http://localhost:8080/removerMusica/" + objMusica.id_endereco, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        // mensagem
        alert("Musica removida com sucesso." + retorno_convertido.mensagem);

        //copia do vetor de Musica
        let vetorTemp = [...enderecos];

        // indice
        let indices = vetorTemp.findIndex((p) => {
          return p.id_endereco === objMusica.id_endereco;
        });

        // remover Musica do vetorTemp
        vetorTemp.splice(indices, 1);

        // atualizar o vetor de Musica
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
  const [btnCadastrarMus, setBtnCadastrarMus] = useState(true);
  const [enderecos, setMusica] = useState([]);
  const [objMusica, setObjMusica] = useState(endereco);

  // UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listarMusica")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setMusica(retorno_convertido));
  }, []);

  // Obtendo os dados do formulário
  const aoDigitarMus = (e) => {
    setObjMusica({ ...objMusica, [e.target.name]: e.target.value });
    console.log(e.target);
  };

  // Selecionar Musica
  const selecionarMusica = (indices) => {
    setObjMusica(enderecos[indices]);
    setBtnCadastrarMus(false);
  };

  // Cadastrar Musica
  const cadastrarMusica = () => {
    fetch("http://localhost:8080/cadastrarMusica", {
      method: "post",
      body: JSON.stringify(objMusica),
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
          setMusica([...enderecos, retorno_convertido]);
          alert("Musica cadastrado com sucesso!");
          limparFormularioMus();
        }
      });
  };

  // Alterar Musica
  const alterarMusica = () => {
    fetch("http://localhost:8080/alterarMusica", {
      method: "put",
      body: JSON.stringify(objMusica),
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
          alert("Musica alterado com sucesso!");

          //copia do vetor de Musica
          let vetorTemp = [...enderecos];

          // indice
          let indices = vetorTemp.findIndex((p) => {
            return p.id_endereco === objMusica.id_endereco;
          });

          // alterar cliente do vetorTemp
          vetorTemp[indices] = objMusica;

          // atualizar o vetor de Musica
          setMusica(vetorTemp);

          limparFormulario();
        }
      });
  };

  //Limpar fomulario
  const limparFormularioMus = () => {
    setObjMusica(endereco);
    setBtnCadastrarMus(true);

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
              eventoMus={aoDigitarMus}
              cadCliente={cadastrarCliente}
              cadMusica={cadastrarMusica}
              objCliente={objCliente}
              objMus={objMusica}
              selecionar={selecionarCliente}
              selecionarMusica={selecionarMusica}
              vetor={clientes}
              vetorMus={enderecos}
              altCliente={alterarCliente}
              altMusica={alterarMusica}
              rmvCliente={removerCliente}
              rmvMusica={removerMusica}
              botao={btnCadastrar}
              botaoMus={btnCadastrarMus}
            />
          }
        />
        <Route
          path="/Consulta"
          element={<Tabela vetor={clientes} selecionar={selecionarCliente} />}
        />
        <Route
          path="/ConsultaMusica"
          element={
            <TabelaMusica vetor={enderecos} selecionar={selecionarMusica} />
          }
        />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
