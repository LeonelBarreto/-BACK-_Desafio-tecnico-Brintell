create database api_alunos;

drop table if exists alunos;

create table alunos(
    id serial primary key,
    nome text not null,
    cpf varchar(20) unique,
    sexo text not null,
    email text not null,
    telefone varchar(20)
);