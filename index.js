#!/usr/bin/env node

const { prompt } = require('inquirer');
const skeleton = require('./skeleton');
const installDeps = require('./install-deps');
const createFiles = require('./create-files');
const getDefaultData = require('./data');
const log = require('./log');
const validate = input => !!input || 'Field can\'t be empty';

(async () => {
  const questions = [{
    validate,
    type: 'input',
    name: 'name',
    message: 'name of project (used as dir name and `package.json.name`)'
  }, {
    validate,
    type: 'input',
    name: 'displayName',
    message: 'Display name of project (used as default document title / readme)'
  }, {
    type: 'input',
    name: 'description',
    message: 'Optional - Description of project (used in readme and as `package.json.description`)'
  }, {
    type: 'input',
    name: 'additionalDependencies',
    message: 'Optional space separated list - Additional dependencies to be installed'
  }, {
    type: 'input',
    name: 'additionalDevDependencies',
    message: 'Optional space separated list - Additional dev dependencies to be installed'
  }];

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

  /**
   * Create project structure (dirs and files)
   */
  log(`Creating "${answers.name}" app structure`)
  await skeleton(data);
  console.log('done.')
  log(`Creating files from template`);
  await createFiles(data);
  console.log('done.')
  log(`Installing dependencies`);
  await installDeps(data);
  console.log('done.')
  log(`
    "${answers.name}" successfully created
    to get it started do:
      $ cd ${answers.name}/ && yarn start
  `);
  process.exit(0);
})();

/**
 * ################
 * ### Ask for: ###
 * ################
 *
 * name, displayName, description
 *
 *
 * ####################
 * ### createFiles: ###
 * ####################
 *
 * example/
 * example/package.json
 * example/src/
 * example/src/index.js
 * example/src/index.html
 *
 * ############################
 * ### install dependencies ###
 * ############################
 *
 * yarn add react react-dom
 * yarn add babel-preset-react --dev
 * yarn add babel-preset-env --dev
 * yarn add parcel-bundler --dev
 * yarn add eslint --dev
 * yarn add eslint-config-prettier --dev
 * yarn add eslint-plugin-jsx-a11y --dev
 * yarn add eslint-plugin-react --dev
 * yarn add --dev jest
 * yarn add --dev husky
 */
