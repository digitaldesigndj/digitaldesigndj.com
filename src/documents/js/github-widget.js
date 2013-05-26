define([ 'json-widget', 'hbs!hb/github-recent' ]
	, function( jsonWidget, template ) {
		var username   = 'DigitalDesignDj'
			, reponame = 'digitaldesigndj.com';
		jsonWidget(
			'.github-commits'
			, 'https://api.github.com/repos/' + username + '/' + reponame + '/commits'
			, template
		);
	}
);
