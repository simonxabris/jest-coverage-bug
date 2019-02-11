

module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				modules: false,
				targets: {
					browsers: [
						'chrome >= 56',
						'firefox >= 51',
						'ie >= 11',
						'edge >=14',
						'safari>=10'
					]
				}
			}
		]
	],
	env: {
		test: {
			presets: [
				[
					'@babel/preset-env',
					{
						targets: {
							node: '10.15.1'
						}
					}
				]
			]
		}
	}
};
