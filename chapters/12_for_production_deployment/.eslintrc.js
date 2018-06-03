module.exports = {
  "extends": "airbnb-base",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "env": {
    "browser": true,
  },
  "rules": {
    "linebreak-style": [0],
    "no-unused-vars": [0],
    "no-param-reassign": [0],
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  }
};