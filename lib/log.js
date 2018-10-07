const chalk = require('chalk');

module.exports = (msg, type = 'default') => {
  switch (type) {
    case 'default':
      console.log(chalk`{blueBright ${msg}}`);
      break;
    case 'success':
      console.log(chalk`{green ${msg}}`);
      break;
    case 'error':
      console.log(chalk`{red ${msg}}`);
      break;
    case 'info':
      console.log(chalk`{black.bgYellow ${msg}}`);
      break;
  }
}
