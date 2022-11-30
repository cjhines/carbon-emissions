module.exports = {
  extends: ["universe/web", "next/core-web-vitals"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    complexity: ["error", 10],
    "no-shadow": "off",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
