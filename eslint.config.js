import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from "eslint-plugin-import";


export default tseslint.config(
	{ ignores: ["dist"] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			import: importPlugin,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			semi: ["error", "always"], // Enforce semicolons
			semi: ["error", "always"], // Enforce semicolons
			quotes: ["error", "single"], // Enforce single quotes
			indent: ["error", "tab"], // Use tabs for indentation
			"no-console": "warn", // Warn about console.log
			"no-unused-vars": "warn", // Warn about unused variables
			"no-undef": "warn", // Warn about undefined variables
			"no-unreachable": "warn", // Warn about unreachable code
			"no-constant-condition": "warn", // Warn about constant conditions
			"no-irregular-whitespace": "warn", // Warn about irregular whitespace
			"import/order": [
				"error",
				{
					groups: [
						["builtin", "external"],
						"internal",
						["parent", "sibling", "index"],
					],
					"newlines-between": "always", // Require a newline between groups
				},
			], // Enforce import order
			"sort-imports": [
				"error",
				{
					"ignoreCase": false, // Enforce case-sensitive sorting
					"ignoreDeclarationSort": false, // Prevent sorting entire import statements
					"ignoreMemberSort": false, // Enforce sorting within the import braces
					"memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
        			"allowSeparatedGroups": false
				},
			],
		},
	}
);
