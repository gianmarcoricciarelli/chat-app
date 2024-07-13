import { fixupConfigRules } from '@eslint/compat';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
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
        rules: {
            'react/no-unknown-property': ['error', { ignore: ['css'] }],
            'react/react-in-jsx-scope': 'off',
        },
    },
];
