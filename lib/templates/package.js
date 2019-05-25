module.exports = ({ name, description }) => `{
  "name": "${name}",
  "version": "0.0.0",
  "license": "MIT",
  "description": "${description}",
  "scripts": {
    "start": "parcel src/index.html",
    "test": "jest"
  },
  "prettier": {
    "singleQuote": true
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "postcss": {
    "modules": false,
    "plugins": {
      "autoprefixer": {
        "browsers": [
          ">1%",
          "last 4 versions",
          "Firefox ESR",
          "not ie < 9"
        ]
      }
    }
  },
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ],
    "*.{json,css,md}": [
      "prettier --write",
      "git add"
    ]
  }
}`;
