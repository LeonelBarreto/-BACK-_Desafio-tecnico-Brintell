# __Repositório do Back-end do Desafio Full Stack da Brintell__

O desafio técnico full stack consiste na criação de dashboard, alimentada por uma API que também foi criada dentro do mesmo desafio.

__Deploy:__ <https://dashboard-app-brintell.netlify.app/>

__Figma:__ <https://www.figma.com/file/S36tfFpl696IbnEWEwJb9y/UI-Design---Dashboard-Brintell?node-id=0%3A1>

__API Deploy Heroku:__ <https://api-alunos-brintell.herokuapp.com/>

__Repositório Front-end:__ <https://github.com/LeonelBarreto/front-brintel-desafio>

## __Pré-requisitos__
- Node.js;
- React.js
- Banco de Dados Relacional ou Não Relacional

## __O Desafio__

A aplicação deve ter:
- Um formulário de cadastro de alunos, contendo os seguintes dados:
  - Nome;
  - CPF (máscara e validação, opcional);
  - Sexo;
  - E-mail (validação, opcional);
  - Telefone (máscara e validação, opcional);
- Uma listagem de alunos (tabela);
- Uma tela de dashboard com um gráfico de pizza contendo a métrica de quantos homens e mulheres foram cadastrados; e
- Inserir um mapa com pontos aleatórios estilizados (ícones e cores) e centralizar no ponto no evento do clique.

___Extras___ _(a seguir foram funções que foram adicionadas por iniciativa própria)_
- Atualização cadastral; e
- Deletar cadastro.

## __Tecnologias Utilizadas__

### __Front-end__
- React.js
- Axios
- React Router Dom
- Google Charts
- Leaflet
- Toastify

### __Back-end__
- Node.js
- Express
- PostgreSQL
- Cors
- DotEnv
- Knex
- Nodemon
- Heroku (deploy)
