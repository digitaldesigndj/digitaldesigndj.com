define([ 'jquery', 'lastfm-widget', 'scroll-page-offscreen', 'json-widget', 'hbs!hb/github-recent' ]
	, function( $, lastfmWidget, scrollPageOffscreen, jsonWidget, tmplGithubRecent ) {
		// run modules of defined functionality
		scrollPageOffscreen();
		lastfmWidget();

		var username   = 'DigitalDesignDj'
			, reponame = 'digitaldesigndj.com'
			, url      = 'https://api.github.com/repos/' + username + '/' + reponame + '/commits'
			, widget   = '.github-commits';

		jsonWidget( url, tmplGithubRecent, widget );
	}
);
