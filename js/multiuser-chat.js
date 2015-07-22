'use strict';

window.onload = function(){

//Grab the room name from the URL
var room = location.search && location.search.split('?')[1];


//Create WebRTC Connection

var webrtc = new SimpleWebRTC({
	//element for our local video
	localVideoElement: 'localVideo',
	//element to hold remote videos
	remoteVideoElement: 'remote',
	autoRequstMedia : true,
	log : true
});

//When ready, and we have a room from URL, join call
webrtc.on('readyToCall', function(){
	if(room) webrtc.joinRoom(room)
})

//Set room names
function setRoom(name){
	console.log('setting room');
 	$('form').remove();
 	$('h1').text("Welcome to room:" + name);
 	$('#subTitle').text('Share this link with friends');
 	$('#roomLink').text(location.href);
 	$('body').addClass('active');

}

//if a room exists, show it in UI

if(room){
	setRoom(room);
}
else{ //if no room, create one when user submits the form
	$('form').submit(function(){
			alert('sup');
		var val = $('#sessionInput').val().toLowerCase().replace(/\s/g, '-');
		webrtc.createRoom(val, function(err,name){
			var newUrl = location.pathname + '?' + name;
			alert(newUrl);
			if(!err){
				history.replaceState({foo:'bar'}, null, newUrl);
				setRoom(name);
			}
		});
		return false;
	});
}

var button = $('#screenShareButton'),
	setButton = function(bool){
		button.text(bool ? 'share screen' : 'stop sharing');
	};

	setButton(true);

	if(!webrtc.screenSharingSupport){
		button[0].disabled = true;
	}else{
		button.click(function(){
			if(webrtc.localScreen){
				webrtc.stopScreenShare();
				setButton(true);
			}
			else{
				webrtc.shareScreen();
				setButton(false);
			}
		});
	}


}