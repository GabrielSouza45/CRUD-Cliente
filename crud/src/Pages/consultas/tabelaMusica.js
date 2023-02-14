import { Table } from "react-bootstrap";
import "./consultas.css";

function TabelaMusica({ vetor, vetor2, selecionar }) {
  return (
    <>
      <section className="tabelaMusicas">
        <h3>Musicas</h3>
        <div className="tables">
          <table className="tabela">
            <thead>
              <tr className="endereco">
                <th>#</th>
                <th>cliente</th>
                <th>bairro</th>
                <th>logradouro</th>
                <th>cep</th>
                <th>numero</th>
                <th>cidade</th>
                <th>uf</th>
                <th>selecionar</th>
              </tr>
            </thead>

            <tbody>
              {vetor.map((obj, indices)  => (
                <tr className="endereco" key={indices}>
                  <td>{indices + 1}</td>
                  <td>{obj.id_cliente}</td>
                  <td>{obj.bairro}</td>
                  <td>{obj.logradouro}</td>
                  <td>{obj.cep}</td>
                  <td>{obj.numero}</td>
                  <td>{obj.cidade}</td>
                  <td>{obj.uf}</td>
                  <td>
                    <button
                      className="btnSelecionar"
                      onClick={() => {
                        selecionar(indices);
                      }}
                    >
                      Selecionar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default TabelaMusica;
