$(function(){
	var socket = io.connect('http://localhost:9779');
	socket.on('news', function (data) {
		// console.log(data);
		$('#broadcast').text(data.messageFromControl);
	});
});
