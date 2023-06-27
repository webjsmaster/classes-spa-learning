module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb-base', 'plugin:jsdoc/recommended-error'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    // plugins: ['jsdoc'],
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 4],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'import/prefer-default-export': 'off',
        'no-param-reassign': [2, { props: false }],
        'import/extensions': [
            'error',
            {
                js: 'ignorePackages',
            },
        ],
        'class-methods-use-this': 'off',
        'jsdoc/require-param-description': 'off',
        'jsdoc/no-undefined-types': 'off',
        'jsdoc/require-returns-description': 'off',
        'jsdoc/require-param-type': 'off',
        'jsdoc/check-tag-names': 'off',
        'jsdoc/require-returns': 'off',
    },

};
