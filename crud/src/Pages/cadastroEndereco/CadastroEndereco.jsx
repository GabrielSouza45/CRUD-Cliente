import InputLabel from "../../Components/inputLabel/inputLabel";
import Option from '../../Components/Label/optionLabel'
import './cadEndereco.css'
import {BsPencil} from "react-icons/bs";
import {BsTrash} from "react-icons/bs";
import {IoIosCloseCircleOutline} from "react-icons/io";

const CadastroEndereco = ({vetor, eventoEnd, cadEndereco, objEnd, selecionarEndereco, vetorEnd, altEndereco, rmvEndereco, botaoEnd}) => {
  return (
    <section className="cadastro-endereco">
      <h3>Endereço</h3>
      <form className="cadastroEndereco">

      <label>Cliente</label>
      <select name="id_cliente" id="id_cliente" onChange={eventoEnd}>
        <option value="" >Escolha uma opção</option>
        {vetor.map((obj, indice) => (
          
          <option value={obj.id_cliente}>{obj.nome}</option>
          
        ))}
        
      </select>
        <InputLabel
          texto="Bairro"
          evento={eventoEnd}
          valor={objEnd.bairro}
          nome="bairro"
          tipo="text"
          holder="Digite aqui"
        />

        <InputLabel
          texto="Logradouro"
          evento={eventoEnd}
          valor={objEnd.logradouro}
          nome="logradouro"
          tipo="text"
          holder="Digite aqui"
        />
        <InputLabel
          texto="CEP"
          evento={eventoEnd}
          valor={objEnd.cep}
          nome="cep"
          tipo="number"
          holder="Digite aqui"
        />
        <InputLabel
          texto="Número"
          evento={eventoEnd}
          valor={objEnd.numero}
          nome="numero"
          tipo="number"
          holder="Digite aqui"
        />
        <InputLabel
          texto="Cidade"
          evento={eventoEnd}
          valor={objEnd.cidade}
          nome="cidade"
          tipo="text"
          holder="Digite aqui"
        />
        <InputLabel
          texto="UF"
          evento={eventoEnd}
          valor={objEnd.uf}
          nome="uf"
          tipo="text"
          holder="Digite aqui"
        />

        
        
    
      {botaoEnd ? (
          <input type="button" className="buttonCadastrar" value="cadastrar" onClick={cadEndereco} />
        ) : (
          <div className="buttons">
            <button  className="buttonEditar" id="alt" onClick={altEndereco}><BsPencil /></button>
            <button  className="buttonEditar" id="rmv" onClick={rmvEndereco}><BsTrash /></button>
            <button  className="buttonEditar" id="esc" ><IoIosCloseCircleOutline /></button>
          </div>
        )}
      </form>
    </section>
  );
};

export default CadastroEndereco;
