package br.com.api.playlist.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.playlist.modelo.CrudModelo;
import br.com.api.playlist.modelo.RespostaModelo;
import br.com.api.playlist.servico.CrudServico;
import br.com.api.playlist.servico.MusicaServico;
import br.com.api.playlist.modelo.MusicaModelo;


@RestController
@CrossOrigin(origins = "*")
public class CrudControle {

    @Autowired
    private CrudServico cs;

    @Autowired
    private MusicaServico ms;

    

    @PutMapping("/alterarMusica")
    public ResponseEntity<?> alterar(@RequestBody MusicaModelo mm){
        return ms.cadastrarAlterar(mm,"alterarMusica");
    }

    @PostMapping("/cadastrarMusica")
    public ResponseEntity<?> cadastrar(@RequestBody MusicaModelo mm){
        return ms.cadastrarAlterar(mm,"cadastrarMusica");
    }



    @GetMapping("/listarMusica")
    public Iterable<MusicaModelo> listarMus(){
        return ms.listar();
    }

    @DeleteMapping({"/removerCantor/{id_cliente}"})
    public ResponseEntity<RespostaModelo> remover(@PathVariable Long id_cliente) {
        return cs.remover(id_cliente);
    }

    @DeleteMapping({"/removerMusica/({id_endereco})"})
    public ResponseEntity<RespostaModelo> remover2(@PathVariable Long id_endereco) {
        return ms.remover2(id_endereco);
    }

    @PutMapping("/alterarCantor")
    public ResponseEntity<?> alterar(@RequestBody CrudModelo cm){
        return cs.cadastrarAlterar(cm,"alterar");
    }

    @PostMapping("/cadastrarCantor")
    public ResponseEntity<?> cadastrar(@RequestBody CrudModelo cm){
        return cs.cadastrarAlterar(cm,"cadastrar");
    }



    @GetMapping("/listarCantor")
    public Iterable<CrudModelo> listar(){
        return cs.listar();
    }


    @GetMapping("/")
    public String rota(){
        return "API cadastro funcionando!";
    }

}
