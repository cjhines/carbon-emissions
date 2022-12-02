module.exports = {
  'app/**/*.{ts,tsx,d.ts}': [
    'node_modules/.bin/eslint --fix',
    'node_modules/.bin/prettier --write',
    'git add',
  ],
};
