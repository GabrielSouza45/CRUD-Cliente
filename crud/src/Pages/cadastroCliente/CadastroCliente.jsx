import InputLabel from "../../Components/inputLabel/inputLabel";
import "../cadastroCliente/cadCliente.css";
import "../../Components/btnCadastrar/btnCadastrar.css";
import InputLabelCpf from "../../Components/inputLabel/inputLabelCpf";
import { BsPencil } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";

const CadastroCliente = ({
  botao,
  evento,
  cadCliente,
  objCliente,
  altCliente,
  rmvCliente,
}) => {
  return (
    <section className="cadastro-Cliente">
      <h3>Cliente</h3>
      <form className="cadastroCliente">
        <InputLabel
          texto="Nome"
          evento={evento}
          valor={objCliente.nome}
          nome="nome"
          tipo="text"
          holder="Digite aqui"
        />

        <InputLabel
          texto="Email"
          evento={evento}
          valor={objCliente.email}
          nome="email"
          tipo="text"
          holder="Digite aqui"
        />

        <InputLabelCpf
          texto="CPF"
          evento={evento}
          valor={objCliente.cpf}
          nome="cpf"
          tipo="text"
          holder="Digite aqui"
        />

        {botao ? (
          <input
            type="button"
            className="buttonCadastrar"
            value="cadastrar"
            onClick={cadCliente}
          />
        ) : (
          <div className="buttons">
            <button className="buttonEditar" id="alt" onClick={altCliente}>
              <BsPencil />
            </button>
            <button className="buttonEditar" id="rmv" onClick={rmvCliente}>
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

export default CadastroCliente;
