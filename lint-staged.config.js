module.exports = {
  "app/**/*.{ts,tsx,d.ts}": [
    "node_modules/.bin/eslint --fix",
    "git add",
  ],
};