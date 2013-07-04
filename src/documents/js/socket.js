$(function(){
	var devsocket = io.connect('http://192.168.0.3:8880');
	devsocket.on('news', function (data) {
		console.log(data);
		$('#broadcast').text(data);
	});
	// var livesocket = io.connect('http://digitaldesigndj.com/', {resource:'api/socket.io'});
	// livesocket.on('news', function (data) {
	// 	// console.log(data);
	// 	if(typeof data.messageFromControl === object){
	// 		template = Handlebars.templates["lastfm-widget-template"];
	// 		$(".lastfm").html( template(data) );
	// 	} else {
	// 		$('#broadcast').text(data.messageFromControl);
	// 	}
		
	// });
});
