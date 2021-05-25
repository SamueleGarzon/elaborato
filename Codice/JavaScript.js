var video=document.getElementById("Motore")
var tempo=video.currentTime;
function iniziaFerma(){
	if (video.paused) {
		tempo=video.currentTime;
		document.getElementById("Motore").src="Immagini/GenBelloOn.mp4";
		video.currentTime=tempo;
		video.play();
		document.getElementById("Interruttore").src="Immagini/On.jpg";
	}else{ 
		video.pause();
		tempo=video.currentTime;
		document.getElementById("Motore").src="Immagini/GenBelloOff.mp4";
		video.currentTime=tempo;
		document.getElementById("Interruttore").src="Immagini/Off.jpg";
	}
}

video.onended=function(){
		if(document.getElementById("Motore").src=="Immagini/Off.jpg"){
			tempo=video.currentTime;
			document.getElementById("Interruttore").src="Immagini/GenBelloOn.mp4";
			video.currentTime=tempo;
			video.play;
		}
}

function test(){
	document.getElementById("Interruttore").src="Immagini/On.jpg";

}
