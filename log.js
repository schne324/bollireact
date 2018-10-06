const chalk = require('chalk');

module.exports = msg => {
  const len = Math.min(msg.length, 44);
  const border = '#'.repeat(len + 6);
  console.log(chalk`
{green.bold ${border}}
{blueBright ## ${msg} ##}
{green.bold ${border}}
  `);
}
