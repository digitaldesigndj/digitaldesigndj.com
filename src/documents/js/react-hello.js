define([ 'react' ], function( React ) {

	/** @jsx React.DOM */
	React.renderComponent(
		React.DOM.h1(null, "Hello, world!"),
		document.getElementById('content')
	);

});