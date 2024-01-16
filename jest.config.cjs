module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testEnvironmentOptions: {
		url: 'http://localhost/',
		userAgent: 'Mozilla/5.0 (linux) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/16.4.0',
		resources: 'usable'
	},
	moduleFileExtensions: ["js", "jsx", "mjs", "ts", "vue"],
	moduleNameMapper: {
		"^@/(.*)": "<rootDir>/$1"
	},
	transform: {
		'^.+\\.(js|jsx|mjs)$': 'babel-jest',
		'^.+\\.(ts|tsx)$': 'ts-jest',
		".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub",
		".*\\.(vue)$": "@vue/vue3-jest",
	},
	transformIgnorePatterns: [
		"node_modules/(?!(nuxt3|unenv))",
	]
}
