const knex = require('../database/connection');

const registerStudent = async (req, res) => {
    const { nome, cpf, sexo, email, telefone } = req.body;

    try {
        if ( !nome || !cpf || !sexo || !email || !telefone ) {
            return res.status(400).json('Todos os campos são obrigatórios');
        };
        
        const searchCpf = await knex("alunos").select("cpf").where("cpf", cpf);

        if (searchCpf.length > 0) {
            return res.status(400).json("O CPF já foi cadastrado");
        };

        const studentData = { nome, cpf, sexo, email, telefone };
        const registration = await knex('alunos').insert(studentData);

        if (registration.length === 0) {
            return res.status(400).json('O aluno não foi cadastrado.');
        };

        return res.status(200).json('O aluno foi cadastrado com sucesso.');

    } catch (error) {
        return res.status(400).json(error.message);
    };
};

const listStudents = async (req, res) => {
    try {
        const students = await knex('alunos');

        if (students.length === 0) {
            return res.status(400).json('Não existe alunos cadastrados.')
        };

        return res.status(200).json(students);

    } catch (error) {
        return res.status(400).json(error.message);
    };
};

module.exports = {
    registerStudent,
    listStudents
};