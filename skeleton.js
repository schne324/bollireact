const executor = require('./executor');

module.exports = async ({ dirs, files }) => {
  const createDirs = dirs.map(d => `mkdir ${d}`).join(' && ');
  const createFiles = files.map(f => `touch ${f}`).join(' && ');
  // first create dirs
  await executor(createDirs);
  // then create files
  await executor(createFiles);
};
