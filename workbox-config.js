module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,css,png,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};