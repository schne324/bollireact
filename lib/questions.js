const validate = input => !!input || 'Field can\'t be empty';

module.exports = [{
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
  message: 'Description of project (optional) - used in readme and as `package.json.description`'
}, {
  type: 'input',
  name: 'additionalDependencies',
  message: 'Additional dependencies to be installed (optional) - space separated list'
}, {
  type: 'input',
  name: 'additionalDevDependencies',
  message: 'Additional devDependencies to be installed (optional) - space separated list'
}];
