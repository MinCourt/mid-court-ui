import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";
import pkg from './package.json';

export default [
	// browser-friendly UMD build
	{
		input: 'src/index.ts',
		output: {
			name: 'howLongUntilLunch',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(),   // so Rollup can find `ms`
			commonjs(),  // so Rollup can convert `ms` to an ES module
			typescript() // so Rollup can convert TypeScript to JavaScript
		]
	},
	{
		input: 'src/index.ts',
		external: ['ms'],
		plugins: [
			typescript() // so Rollup can convert TypeScript to JavaScript
		],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	},
	{
        input: "src/index.ts",
        output: [{ file: "dist/types.d.ts", format: "es" }],
        plugins: [dts()],
    },
];