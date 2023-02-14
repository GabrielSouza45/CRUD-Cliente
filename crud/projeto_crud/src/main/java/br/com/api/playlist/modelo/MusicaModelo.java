package br.com.api.playlist.modelo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "endereco")

@Getter
@Setter

public class MusicaModelo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_endereco;
    private Long id_cliente;
    private String nome;
    private String bairro;
    private String logradouro;
    private Integer cep;
    private Integer numero;
    private String cidade;
    private String uf;

}
