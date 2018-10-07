const { spawn } = require('child_process');
const log = require('./log');

module.exports = async (cmd) => {
  return new Promise(resolve => {
    const child = spawn(cmd, { shell: true });

    log(
      `Executing:
${cmd}`,
      'info'
    );

    child.stdout.on('data', chunk => log(chunk, 'success'));
    child.stderr.on('data', chunk => log(chunk, 'error'));
    child.on('close', code => {
      log(`process exited with code ${code}`);
      resolve();
    });
  });
}
