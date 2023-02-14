package br.com.api.playlist.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import br.com.api.playlist.modelo.MusicaModelo;
import br.com.api.playlist.modelo.RespostaModelo;
import br.com.api.playlist.repositorio.MusicaRepositorio;

@Service
@CrossOrigin(origins = "*")
public class MusicaServico {

    @Autowired
    private MusicaRepositorio mr;

    @Autowired
    private RespostaModelo rm;

    // Método para listar
    public Iterable<MusicaModelo> listar() {
        return mr.findAll();
    }

    // Método para cadastrar ou alterar
    public ResponseEntity<?> cadastrarAlterar(MusicaModelo mm, String acao) {
        if (mm.getBairro().equals("")) {

            rm.setMensagem("Bairro é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        } else if (mm.getLogradouro().equals("")) {
            rm.setMensagem("Logradouro é obrigatório.");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        
        } else if ((mm.getCep().equals(0) || mm.getCep().equals(null) || mm.getCep().equals(""))){
            rm.setMensagem("CEP é obrigatório.");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        }else if (mm.getId_cliente().equals("") || mm.getId_cliente().equals(null)  ){
            rm.setMensagem("Cliente é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        }else if (mm.getNumero().equals(0) || mm.getNumero().equals(null)  ){
            rm.setMensagem("Número é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        }else if (mm.getCidade().equals("") || mm.getCidade().equals(null)  ){
            rm.setMensagem("Cidade é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        }else if (mm.getUf().equals("") || mm.getUf().equals(null)  ){
            rm.setMensagem("Uf é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        }
        else {
            if (acao.equals("cadastrar")) {
                return new ResponseEntity<MusicaModelo>(mr.save(mm), HttpStatus.CREATED);

            } else {
                return new ResponseEntity<MusicaModelo>(mr.save(mm), HttpStatus.OK);

            }
        }

    }

    //Método para remover
    public ResponseEntity<RespostaModelo> remover2(long id_endereco){

        mr.deleteById(id_endereco);

        rm.setMensagem("Removido com sucesso");
        return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);
    }

}
