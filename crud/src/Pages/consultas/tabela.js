import { Table } from "react-bootstrap";
import "./consultas.css";
function Tabela({
  vetor,
  selecionar,
  altCliente,
  rmvCliente,
  vetorMus,
  selecionarMus,
}) {
  return (
    <>
      <section className="tabelaCliente">
        <h3>Clientees</h3>
        <div className="tables">
          <table className="tabela">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>email</th>
                <th>cpf</th>
                <th>selecionar</th>
              </tr>
            </thead>

            <tbody>
              {vetor.map((obj, indice) => (
                <tr key={indice}>
                  <td>{indice + 1}</td>
                  <td>{obj.nome}</td>
                  <td>{obj.email}</td>
                  <td>{obj.cpf}</td>
                  <td>
                    <button
                      className="btnSelecionar"
                      onClick={() => {
                        selecionar(indice);
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

export default Tabela;
