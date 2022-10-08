CREATE DATABASE api_alunos;

DROP TABLE IF EXISTS alunos;

CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    cpf VARCHAR(20) UNIQUE,
    sexo TEXT NOT NULL,
    email TEXT NOT NULL,
    telefone VARCHAR(20)
);