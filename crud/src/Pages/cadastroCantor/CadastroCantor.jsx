import InputLabel from "../../Components/inputLabel/inputLabel";
import "../cadastroCantor/cadCantor.css";
import "../../Components/btnCadastrar/btnCadastrar.css";
import { BsPencil } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";

const CadastroCantor = ({
  botao,
  evento,
  cadCantor,
  objCantor,
  altCantor,
  rmvCantor,
}) => {
  return (
    <section className="cadastro-Cantor">
      <h3>Cantor</h3>
      <form className="cadastroCantor">
        <InputLabel
          texto="Nome"
          evento={evento}
          valor={objCantor.nome}
          nome="nome"
          tipo="text"
          holder="Digite aqui"
        />

        <InputLabel
          texto="email"
          evento={evento}
          valor={objCantor.email}
          nome="email"
          tipo="text"
          holder="Digite aqui"
        />

        <InputLabel
          texto="Idade do cantor"
          evento={evento}
          valor={objCantor.cpf}
          nome="cpf"
          tipo="text"
          holder="Digite aqui"
        />

        {botao ? (
          <input
            type="button"
            className="buttonCadastrar"
            value="cadastrar"
            onClick={cadCantor}
          />
        ) : (
          <div className="buttons">
            <button className="buttonEditar" id="alt" onClick={altCantor}>
              <BsPencil />
            </button>
            <button className="buttonEditar" id="rmv" onClick={rmvCantor}>
              <BsTrash />
            </button>
            <button className="buttonEditar" id="esc">
              <IoIosCloseCircleOutline />
            </button>
          </div>
        )}
      </form>
    </section>
  );
};

export default CadastroCantor;
