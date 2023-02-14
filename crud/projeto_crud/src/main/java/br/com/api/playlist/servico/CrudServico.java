package br.com.api.playlist.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.playlist.modelo.CrudModelo;
import br.com.api.playlist.modelo.RespostaModelo;
import br.com.api.playlist.repositorio.CrudRepositorio;

@Service
public class CrudServico {

    @Autowired
    private CrudRepositorio cr;

    @Autowired
    private RespostaModelo rm;

    //Método para listar 
    public Iterable<CrudModelo> listar(){
        return cr.findAll();
    }

    //Método para cadastrar ou alterar
    public ResponseEntity<?> cadastrarAlterar(CrudModelo cm, String acao){
        if(cm.getNome().equals("")){

            rm.setMensagem("O nome é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        } else if (cm.getEmail().equals("") ){
            rm.setMensagem("Email é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        }else if (cm.getCpf().equals("") ){
            rm.setMensagem("CPF é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        }else{
            if (acao.equals("cadastrar")){
                return new ResponseEntity<CrudModelo>(cr.save(cm), HttpStatus.CREATED);

            }else{
                return new ResponseEntity<CrudModelo>(cr.save(cm), HttpStatus.OK);

            }
        }
        
    }


    //Método para remover
    public ResponseEntity<RespostaModelo> remover(Long id_cliente){

        cr.deleteById(id_cliente);

        rm.setMensagem("Removido com sucesso");
        return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);
    }
 }
