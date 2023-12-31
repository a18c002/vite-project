module.exports = {
	env: {
	browser: true,
	es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
	overrides: [],
	parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
	},
	plugins: ['vue'],
	rules: {
    'vue/multi-word-component-names': 'off',
    'no-useless-escape': 'off',
    'no-undef': 'off',
	},
	globals: {
    StringUtils: true,
	},
};
  