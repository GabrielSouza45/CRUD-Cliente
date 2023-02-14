import InputLabel from "../../Components/inputLabel/inputLabel";
import Option from '../../Components/Label/optionLabel'
import './cadMusica.css'
import {BsPencil} from "react-icons/bs";
import {BsTrash} from "react-icons/bs";
import {IoIosCloseCircleOutline} from "react-icons/io";

const CadastroMusica = ({vetor, eventoMus, cadMusica, objMus, selecionarMusica, vetorMus, altMusica, rmvMusica, botaoMus}) => {
  return (
    <section className="cadastro-endereco">
      <h3>Música</h3>
      <form className="cadastroMusica">

      <label>Cliente</label>
      <select name="id_cliente" id="id_cliente" onChange={eventoMus}>
        <option value="" >Escolha uma opção</option>
        {vetor.map((obj, indice) => (
          
          <option value={obj.id_cliente}>{obj.nome}</option>
          
        ))}
        
      </select>
        <InputLabel
          texto="Bairro"
          evento={eventoMus}
          valor={objMus.bairro}
          nome="bairro"
          tipo="text"
          holder="Digite aqui"
        />

        <InputLabel
          texto="Logradouro"
          evento={eventoMus}
          valor={objMus.logradouro}
          nome="logradouro"
          tipo="text"
          holder="Digite aqui"
        />
        <InputLabel
          texto="CEP"
          evento={eventoMus}
          valor={objMus.cep}
          nome="cep"
          tipo="number"
          holder="Digite aqui"
        />
        <InputLabel
          texto="Número"
          evento={eventoMus}
          valor={objMus.numero}
          nome="numero"
          tipo="number"
          holder="Digite aqui"
        />
        <InputLabel
          texto="Cidade"
          evento={eventoMus}
          valor={objMus.cidade}
          nome="cidade"
          tipo="text"
          holder="Digite aqui"
        />
        <InputLabel
          texto="UF"
          evento={eventoMus}
          valor={objMus.uf}
          nome="uf"
          tipo="text"
          holder="Digite aqui"
        />

        
        
    
      {botaoMus ? (
          <input type="button" className="buttonCadastrar" value="cadastrar" onClick={cadMusica} />
        ) : (
          <div className="buttons">
            <button  className="buttonEditar" id="alt" onClick={altMusica}><BsPencil /></button>
            <button  className="buttonEditar" id="rmv" onClick={rmvMusica}><BsTrash /></button>
            <button  className="buttonEditar" id="esc" ><IoIosCloseCircleOutline /></button>
          </div>
        )}
      </form>
    </section>
  );
};

export default CadastroMusica;
