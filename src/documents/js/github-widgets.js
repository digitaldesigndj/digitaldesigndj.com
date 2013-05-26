define([ 'json-widget', 'hbs!hb/github-com', 'hbs!hb/github-api' ]
	, function( jsonWidget, comTmpl, apiTmpl ) {
		var username   = 'DigitalDesignDj'
			, reponame = 'digitaldesigndj.com';
		jsonWidget(
			'.github-com'
			, 'https://api.github.com/repos/' + username + '/' + reponame + '/commits'
			, comTmpl
		);
		reponame = 'digitaldesigndj.api';
		jsonWidget(
			'.github-api'
			, 'https://api.github.com/repos/' + username + '/' + reponame + '/commits'
			, apiTmpl
		);
	}
);