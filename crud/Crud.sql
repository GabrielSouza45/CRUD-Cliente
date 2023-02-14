#drop database crud;

create database crud;
use crud;

#drop TABLE cliente;


CREATE TABLE cliente (
`id_cliente` int NOT NULL,
`nome` varchar(100) NOT NULL,
`email` VARCHAR(100) NOT NULL,
`cpf` varchar(11) not null,
PRIMARY KEY (`id_cliente`),
UNIQUE KEY 	`email` (`email`)
);
SELECT * FROM crud.cliente;

#DROP TABLE IF EXISTS `endereco`;
 

CREATE TABLE endereco (
`id_endereco` int NOT NULL AUTO_INCREMENT,
`id_cliente` int not null,
`bairro` varchar(100) NOT NULL,
`logradouro` VARCHAR(100) NOT NULL,
`cep` int NOT NULL,
`numero` int not null,
`cidade` varchar(100) not null,
`uf` varchar(50) not null,
PRIMARY KEY (`id_endereco`),
KEY `id_endereco` (`id_endereco`),
key `id_cliente` (`id_cliente`)
);
 SELECT * FROM crud.endereco;

ALTER TABLE `endereco` ADD CONSTRAINT `endereco_ibfk2` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`);
