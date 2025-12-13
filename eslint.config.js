const globals = require("globals");

module.exports = [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node
      }
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-unused-vars": ["error"]
    }
  }
];
