define([ 'lastfm-widget', 'scroll-page-offscreen', 'json-widget', 'hbs!hb/github-recent' ]
	, function( lastfmWidget, scrollPageOffscreen, jsonWidget, tmplGithubRecent ) {

		lastfmWidget();

		scrollPageOffscreen();

		var username   = 'DigitalDesignDj'
			, reponame = 'digitaldesigndj.com'
		jsonWidget( 
			'.github-commits'
			, 'https://api.github.com/repos/' + username + '/' + reponame + '/commits'
			, tmplGithubRecent
		);

	}
);
