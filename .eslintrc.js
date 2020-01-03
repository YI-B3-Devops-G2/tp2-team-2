module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    extends: [
        'airbnb-base',
        'prettier',
        'plugin:prettier/recommended',
        'eslint-config-prettier',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        'no-console': 0,
        'prettier/prettier': [
            'error',
            {
                'trailingComma': 'es5',
                'singleQuote': true,
                'printWidth': 100
            }
        ]
    },
    plugins: ['prettier']
}
