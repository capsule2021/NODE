const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer
  .prompt([
    { name: 'nome', message: 'Qual o seu nome?' },
    { name: 'idade', message: 'Qual a sua idade?' },
  ])
  .then((answers) => {
    const response = `O nome do usuário é ${answers.nome} e ele tem ${answers.idade} anos`
    console.log(chalk.bgYellow.black(response))
  })
  .catch((err) => {
    console.log(err)
  })
















  
const inquirer = require('inquirer');
const chalk = require('chalk');

// Função para perguntar ao usuário
async function askUserDetails() {
  try {
    const answers = await inquirer.prompt([
      {
        name: 'nome',
        message: 'Qual o seu nome?',
        validate: function (input) {
          if (input.trim() === '') {
            return 'Nome não pode ser vazio';
          }
          return true;
        },
      },
      {
        name: 'idade',
        message: 'Qual a sua idade?',
        validate: function (input) {
          const age = parseInt(input, 10);
          if (isNaN(age) || age <= 0) {
            return 'Idade deve ser um número positivo';
          }
          return true;
        },
      },
    ]);

    // Exibir a resposta formatada
    const response = `O nome do usuário é ${answers.nome} e ele tem ${answers.idade} anos`;
    console.log(chalk.bgYellow.black(response));

  } catch (error) {
    console.error('Erro ao obter os detalhes do usuário:', error);
  }
}

// Executar a função principal
askUserDetails();
