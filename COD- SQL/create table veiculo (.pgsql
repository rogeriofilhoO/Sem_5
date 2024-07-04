create table veiculo (
    codigo integer primary key,
    placa varchar(5) not null,
    nome varchar(50) not null,
    motor varchar(4)
);

create table telefone (
    codigo integer primary key,
    codcliente integer not null,
    ddd varchar(2) not null,
    telefone varchar(11) not null,
    constraint fk_cliente foreign key (codCliente) references cliente (codigo)
)




drop table veiculo;

drop table cliente;


