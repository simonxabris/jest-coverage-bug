const path = require('path');

console.log('collecting coverage from: ', path.join(__dirname, '..', 'source', 'common', '**', '*.{js,vue}'));

module.exports = {
	moduleFileExtensions: ['js', 'json', 'vue'],
	transform: {
		'.*\\.(vue)$': 'vue-jest',
		'^.+\\.js$': '<rootDir>/node_modules/babel-jest'
	},
	moduleNameMapper: {
		'^common$': path.join(__dirname, '..', 'source', 'common'),
		'^validators$': path.join(__dirname, '..', 'source', 'common', 'validators')
	},
	moduleDirectories: [
		'<rootDir>/node_modules/'
	],
	roots: [
		path.join(__dirname, '..', 'source')
	],
	transformIgnorePatterns: [
		'/node_modules/(?!vue).+\\.js$'
	],
	collectCoverage: true,
	collectCoverageFrom: [
		// path.join(__dirname, '..', 'source', 'common', '**', '*.{js,vue}')
		'../source/**/*.{js,vue}'
  ],
  coveragePathIgnorePatterns: [
    'node_modules/'
  ]
};
