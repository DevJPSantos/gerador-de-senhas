import inquirer from 'inquirer';
import chalk from 'chalk';
import { gerarSenha } from './src/gerador.js';

console.clear();
console.log(chalk.blue.bold('\n🔐 Gerador de Senhas Seguras\n'));

inquirer.prompt([
  {
    type: 'number',
    name: 'length',
    message: 'Qual o tamanho da senha?',
    default: 12
  },
  {
    type: 'confirm',
    name: 'useNumbers',
    message: 'Incluir números?',
    default: true
  },
  {
    type: 'confirm',
    name: 'useSymbols',
    message: 'Incluir símbolos?',
    default: true
  }
]).then(answers => {
  const password = gerarSenha(
    answers.length,
    answers.useNumbers,
    answers.useSymbols
  );
  console.log(chalk.green(`\nSenha gerada: ${password}\n`));
});
