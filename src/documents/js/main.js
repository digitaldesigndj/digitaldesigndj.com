define([ 'jquery', 'github-widget', 'lastfm-widget', 'scroll-page-offscreen' ]
	, function( $, githubWidget, lastfmWidget, scrollPageOffscreen ) {
		// run modules of defined functionality
		scrollPageOffscreen();
		githubWidget();
		lastfmWidget();
	}
);
