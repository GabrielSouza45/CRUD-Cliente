import CadastroCliente from "../cadastroCliente/CadastroCliente";
import CadastroEndereco from "../cadastroEndereco/CadastroEndereco";
import Tabela from "../consultas/tabela";
import TabelaEndereco from "../consultas/tabelaEndereco";
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
  eventoEnd,
  cadEndereco,
  objEnd,
  selecionarEndereco,
  vetorEnd,
  altEndereco,
  rmvEndereco,
  botaoEnd,
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

          <CadastroEndereco
            eventoEnd={eventoEnd}
            cadEndereco={cadEndereco}
            objEnd={objEnd}
            selecionarEndereco={selecionarEndereco}
            vetorEnd={vetorEnd}
            altEndereco={altEndereco}
            rmvEndereco={rmvEndereco}
            botaoEnd={botaoEnd}
            vetor={vetor}
          />
          {/* <button onClick={cadastrarEndereco}>Cadastrar</button> */}
        </div>
      </section>

      <section className="tabelaCliente">
        <Tabela vetor={vetor} selecionar={selecionar} />
      </section>
      <section className="tabelaEndereco">
        <TabelaEndereco vetor={vetorEnd} vetor2 ={vetor} selecionar={selecionarEndereco} />
      </section>
    </>
  );
};

export default Cadastro;
