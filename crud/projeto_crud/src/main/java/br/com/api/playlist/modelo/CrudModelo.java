package br.com.api.playlist.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "cliente", uniqueConstraints = {
    @UniqueConstraint(columnNames = {
        "email"
    })
})

@Getter
@Setter

public class CrudModelo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long   id_cliente;
    private String nome;
    private String cpf;

    @Column(name ="email")
    private String email;
}
