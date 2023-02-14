import CadastroCliente from "../cadastroCliente/CadastroCliente";
import CadastroMusica from "../cadastroMusica/CadastroMusica";
import Tabela from "../consultas/tabela";
import TabelaMusica from "../consultas/tabelaMusica";
import "./cadastro.css";

const Cadastro = ({
  botao,
  evento,
  cadCliente,
  objCliente,
  selecionar,
  vetor,
  altCliente,
  rmvCliente,
  eventoMus,
  cadMusica,
  objMus,
  selecionarMusica,
  vetorMus,
  altMusica,
  rmvMusica,
  botaoMus,
}) => {
  return (
    <>
      <section className="cadastro">
        <div className="cadastros">
          <CadastroCliente
            evento={evento}
            cadCliente={cadCliente}
            objCliente={objCliente}
            altCliente={altCliente}
            rmvCliente={rmvCliente}
            botao={botao}
          />

          {/* <button onClick={cadastrarCliente}>Cadastrar</button> */}

          <CadastroMusica
            eventoMus={eventoMus}
            cadMusica={cadMusica}
            objMus={objMus}
            selecionarMusica={selecionarMusica}
            vetorMus={vetorMus}
            altMusica={altMusica}
            rmvMusica={rmvMusica}
            botaoMus={botaoMus}
            vetor={vetor}
          />
          {/* <button onClick={cadastrarMusica}>Cadastrar</button> */}
        </div>
      </section>

      <section className="tabelaCliente">
        <Tabela vetor={vetor} selecionar={selecionar} />
      </section>
      <section className="tabelaMusica">
        <TabelaMusica vetor={vetorMus} vetor2 ={vetor} selecionar={selecionarMusica} />
      </section>
    </>
  );
};

export default Cadastro;
