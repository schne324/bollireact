const executor = require('./executor');

module.exports = async ({ name, deps, devDeps }) => {
  const dirNav = `cd ${name}/ &&`
  // install dependencies
  await executor(`${dirNav} yarn add ${deps.join(' ')}`);
  // install dev dependencies
  await executor(`${dirNav} yarn add --dev ${devDeps.join(' ')}`);
}
