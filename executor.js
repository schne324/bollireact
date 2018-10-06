const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const log = require('./log');

module.exports = async cmd => {
  const { stdout, stderr } = await exec(cmd);
  if (stdout) {
    log(`stdout: ${stdout}`);
  }

  if (stderr) {
    log(`stderr: ${stderr}`);
  }
}
