module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions:  {
        ecmaVersion:  2018,
        sourceType:  'module',
        ecmaFeatures:  {
            jsx:  true,
        },
        tabWidth: 2,
        code: 120,
        singleQuote: true,
        semi: false,
        printWidth: 120
    },
    rules:  {},
    settings:  {
        react:  {
            version:  'detect',
        },
    },
};