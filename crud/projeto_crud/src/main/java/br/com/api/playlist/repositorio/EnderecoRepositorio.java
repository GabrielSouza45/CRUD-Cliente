package br.com.api.playlist.repositorio;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import br.com.api.playlist.modelo.EnderecoModelo;

@Repository
@CrossOrigin(origins = "*")
public interface EnderecoRepositorio extends CrudRepository<EnderecoModelo, Long>{
    
}
