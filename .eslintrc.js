module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
  ],
  overrides: [
    {
      files: [
        'public/js/**/*.js'
      ],
      env: {
        browser: true,
        node: false
      },
      rules: {
        "strict": "off"
      }
    },
  ],
  plugins: [
    "node",
  ],
  root: true,
  rules: {
    "comma-dangle": ["error", {arrays: "always-multiline", objects: "always-multiline"}],
    "eol-last": ["error", "always"],
    "eqeqeq": "error",
    "no-console": ["error", {allow: ["error", "info", "warn"]}],
    "no-process-env": "error",
    "no-trailing-spaces": "error",
    "no-unused-vars": ["error", {vars: "all", args: "none", ignoreRestSiblings: false}],
    "no-var": "error",
    "no-warning-comments": "warn",
    "prefer-const": "error",
    "quotes": ["error", "double"],
    "require-jsdoc": "off",
    "semi": ["error", "always"],
    "strict": ["error", "safe"],
    "valid-jsdoc": "warn",
  }
};
