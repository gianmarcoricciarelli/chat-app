import { fixupConfigRules } from '@eslint/compat';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        plugins: {
            'unused-imports': unusedImports,
        },
        rules: {
            'no-unused-vars': 'off',
            'react/no-unknown-property': ['error', { ignore: ['css'] }],
            'react/react-in-jsx-scope': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
        },
    },
];
