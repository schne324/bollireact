module.exports = ({ name }) => ({
  deps: ['prop-types', 'react', 'react-dom'],
  devDeps: [
    '@babel/core',
    '@babel/preset-react',
    '@babel/preset-env',
    '@babel/preset-stage-0',
    '@babel/plugin-proposal-class-properties',
    'babel-eslint',
    'eslint',
    'eslint-config-prettier',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-react',
    'lint-staged',
    'husky',
    'jest',
    'parcel-bundler',
    'prettier',
    'autoprefixer'
  ],
  dirs: [`${name}`, `${name}/src`, `${name}/src/App`],
  files: [
    `${name}/package.json`,
    `${name}/README.md`,
    `${name}/src/index.js`,
    `${name}/src/index.css`,
    `${name}/src/index.html`,
    `${name}/src/App/index.js`
  ]
});
