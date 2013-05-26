define(['underscore', 'jquery'], function ( _, $ ) {
	return function json_widget( selector, url, template ) {
		var widget = $( selector );
		if( widget.length ) {
			$.ajax({
				url: url
				, dataType: 'json'
				, success: function( data ) {
					if( data ) {
						widget
							.html( template( _.first( data, 10 ) ) )
							.addClass( 'widget' );
					}else{
						console.log( data );
					}
				}
			});
		}
	};
});