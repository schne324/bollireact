#!/usr/bin/env node

const { prompt } = require('inquirer');
const skeleton = require('./lib/skeleton');
const installDeps = require('./lib/install-deps');
const createFiles = require('./lib/create-files');
const getDefaultData = require('./lib/data');
const log = require('./lib/log');
const questions = require('./lib/questions');

(async () => {
  const answers = await prompt(questions);
  const defaultData = getDefaultData(answers);
  const data = {
    ...defaultData,
    ...answers,
    deps: [
      ...defaultData.deps,
      ...answers.additionalDependencies.split(' ').filter(d => d)
    ],
    devDeps: [
      ...defaultData.devDeps,
      ...answers.additionalDevDependencies.split('  ').filter(d => d)
    ]
  };

  log(`
##################################################
##   Creating "${answers.name}" app structure   ##
##################################################
  `);
  await skeleton(data);
  log('App structure has been created', 'info');

  log(`
##################################################
##         Creating files from template         ##
##################################################
  `);
  await createFiles(data);
  log('Files have been created', 'info');

  log(`
##################################################
##            Installing dependencies           ##
##################################################
  `);
  await installDeps(data);
  log('Dependencies have been installed', 'info');

  log(`
"${answers.name}" successfully created

$ cd ${answers.name}/ && yarn start
  `);
  process.exit(0);
})();
