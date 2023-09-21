module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
<<<<<<< HEAD
=======
        "plugin:@typescript-eslint/recommended",
>>>>>>> 78f8f8a4863a68e25fcccc011a4b61208e8aa7ad
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
<<<<<<< HEAD
=======
    "parser": "@typescript-eslint/parser",
>>>>>>> 78f8f8a4863a68e25fcccc011a4b61208e8aa7ad
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
<<<<<<< HEAD
=======
        "@typescript-eslint",
>>>>>>> 78f8f8a4863a68e25fcccc011a4b61208e8aa7ad
        "react"
    ],
    "rules": {
    }
}
