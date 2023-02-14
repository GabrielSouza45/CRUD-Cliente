package br.com.api.playlist.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import br.com.api.playlist.modelo.EnderecoModelo;

import br.com.api.playlist.modelo.RespostaModelo;
import br.com.api.playlist.repositorio.EnderecoRepositorio;

@Service
@CrossOrigin(origins = "*")
public class EnderecoServico {

    @Autowired
    private EnderecoRepositorio er;

    @Autowired
    private RespostaModelo rm;

    // Método para listar
    public Iterable<EnderecoModelo> listar() {
        return er.findAll();
    }

    // Método para cadastrar ou alterar
    public ResponseEntity<?> cadastrarAlterar(EnderecoModelo em, String acao) {
        if (em.getBairro().equals("")) {

            rm.setMensagem("Bairro é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        } else if (em.getLogradouro().equals("")) {
            rm.setMensagem("Logradouro é obrigatório.");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        
        } else if ((em.getCep().equals(0) || em.getCep().equals(null) || em.getCep().equals(""))){
            rm.setMensagem("CEP é obrigatório.");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        }else if (em.getId_cliente().equals("") || em.getId_cliente().equals(null)  ){
            rm.setMensagem("Cliente é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        }else if (em.getNumero().equals(0) || em.getNumero().equals(null)  ){
            rm.setMensagem("Número é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        }else if (em.getCidade().equals("") || em.getCidade().equals(null)  ){
            rm.setMensagem("Cidade é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        }else if (em.getUf().equals("") || em.getUf().equals(null)  ){
            rm.setMensagem("Uf é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        }
        else {
            if (acao.equals("cadastrar")) {
                return new ResponseEntity<EnderecoModelo>(er.save(em), HttpStatus.CREATED);

            } else {
                return new ResponseEntity<EnderecoModelo>(er.save(em), HttpStatus.OK);

            }
        }

    }

    //Método para remover
    public ResponseEntity<RespostaModelo> remover2(long id_endereco){

        er.deleteById(id_endereco);

        rm.setMensagem("Removido com sucesso");
        return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);
    }

}
