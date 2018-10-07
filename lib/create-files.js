const executor = require('./executor');
const appJs = require('./templates/app');
const indexJs = require('./templates/index');
const indexCss = require('./templates/css');
const indexHtml = require('./templates/html');
const packageJson = require('./templates/package');
const readmeMd = require('./templates/readme');
const eslintrcJson = require('./templates/eslintrc');
const babelrc = require('./templates/babelrc');
const gitignore = require('./templates/gitignore');

module.exports = async data => {
  await executor(`echo '${packageJson(data)}' >> ${data.name}/package.json`);
  await executor(`echo '${readmeMd(data)}' >> ${data.name}/README.md`);
  await executor(`echo '${indexJs(data)}' >> ${data.name}/src/index.js`);
  await executor(`echo '${indexCss(data)}' >> ${data.name}/src/index.css`);
  await executor(`echo '${indexHtml(data)}' >> ${data.name}/src/index.html`);
  await executor(`echo '${appJs(data)}' >> ${data.name}/src/App/index.js`);
  await executor(`echo '${eslintrcJson(data)}' >> ${data.name}/.eslintrc.json`);
  await executor(`echo '${babelrc(data)}' >> ${data.name}/.babelrc`);
  await executor(`echo '${gitignore(data)}' >> ${data.name}/.gitignore`);
};
