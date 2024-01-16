export default {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleFileExtensions: ["js", "jsx", "mjs", "ts", "vue"],
	transform: {
		'^.+\\.vue$': '@vue/vue3-jest',
		'^.+\\.js$': 'babel-jest',
		".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub",
		'^.+\\.ts$': 'ts-jest',
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		"#app": "<rootDir>/node_modules/nuxt3/dist/app/index.mjs"
	},
	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tsconfig.json'
		}
	},
	transformIgnorePatterns: ["node_modules/(?!(nuxt3|unenv))"],
}
