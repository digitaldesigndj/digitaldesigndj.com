define(function () {
	(function() {
		console.log("LIVE RELOAD SCRIPT");
		/* Did we just livereload? */
		var log = true && localStorage && console && console.log && true;
		if ( log && localStorage.getItem('/docpad-livereload/reloaded') === 'yes' ) {
			localStorage.removeItem('/docpad-livereload/reloaded');
			console.log('LiveReloaded at', new Date())
		}
		/* Listen for the regenerated event and perform a reload of the page when the event occurs */
		var listen = function(){
			var socket = io.connect('/docpad-livereload');
			socket.on('regenerated',function(){
				if ( log ) {
					localStorage.setItem('/docpad-livereload/reloaded', 'yes');
				}
				document.location.reload();
			});
		};
		if ( typeof io !== 'undefined' ) {
			listen();
		} else {
			/* Inject socket.io into our page then listen once loaded */
			var inject = function(){
				var t = document.createElement('script');
				t.type = 'text/javascript';
				t.async = true;
				t.src = '/socket.io/socket.io.js';
				t.onload = listen;
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(t,s);
			};
			var readyStateCheckInterval = setInterval(function() {
				if (document.readyState === "complete") {
					inject();
					clearInterval(readyStateCheckInterval);
				}
			}, 10);
		}
	})();
});