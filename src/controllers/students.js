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

const updateStudent = async (req, res) => {
    const { nome, cpf, sexo, email, telefone } = req.body;
    const { id } = req.params;

    try {
        if ( !nome || !cpf || !sexo || !email || !telefone ) {
            return res.status(400).json('Todos os campos são obrigatórios');
        };
        
        const searchCpf = await knex("alunos").where("id", "!=", id).andWhere("cpf", cpf);

        if (searchCpf.length > 0) {
            return res.status(400).json("Já existe este cpf cadastrado por outro aluno.");
        }

        const updateData = await knex("alunos").update({ ...req.body }).where("id", id).returning("*");

        if (updateData.length === 0) {
            return res.status(400).json("Falha na atualização dos dados do aluno.");
        }

    return res.status(200).json("Atualização realizada com sucesso");
    } catch (error) {
        return res.status(400).json(error.message);
    };
};

const deleteStudent = async (req, res) => {
    const { id } = req.params;

	try {
		const studentFound = await knex('alunos').where("id", id);

        if (studentFound.length === 0) {
            return res.status(404).json("Aluno não encontrado");
        };

        const deleted = await knex('alunos').where("id", id).del();
        if (deleted.length === 0) {
            return res.status(400).json("Aluno não foi excluido");
        };

        return res.status(200).json("Aluno excluido com sucesso");
	} catch (error) {
        return res.status(400).json(error.message);
	};
};

module.exports = {
    registerStudent,
    listStudents,
    updateStudent,
    deleteStudent
};