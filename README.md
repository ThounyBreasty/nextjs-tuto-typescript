This is a starter template for [Learn Next.js](https://nextjs.org/learn).

{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb",
    "eslint:recommended",
    "next",
    "prettier",
    "plugin:valtio/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "settings": {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    }
  },
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
  }
}