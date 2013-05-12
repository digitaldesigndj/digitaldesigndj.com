$(function(){
	var devsocket = io.connect('http://192.168.0.3:8880');
	devsocket.on('news', function (data) {
		// console.log(data);
		$('#broadcast').text(data.messageFromControl);
	});
	var livesocket = io.connect('http://digitaldesigndj.com/', {resource:'api/socket.io'});
	livesocket.on('news', function (data) {
		// console.log(data);
		$('#broadcast').text(data.messageFromControl);
	});
});
