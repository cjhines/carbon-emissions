module.exports = {
  "app/**/*.{ts,tsx,d.ts}": [
    "app/node_modules/.bin/eslint --fix",
    "app/node_modules/.bin/prettier --write",
    "git add",
  ],
};