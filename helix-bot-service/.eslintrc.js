module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:eslint-comments/recommended',
        "eslint:recommended",
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        "prettier",
        "eslint-config-prettier",
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-var-requires': 'off',
        'react/prop-types': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
}