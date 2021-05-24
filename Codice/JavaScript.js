var video=document.getElementById("Motore")

function iniziaFerma(){
	if (video.paused) {
		video.play();
		document.getElementById("Interruttore").src="Immagini/On.jpg";
	}else{ 
		video.pause();
		document.getElementById("Interruttore").src="Immagini/Off.jpg";
	}
}

video.onended=function(){
		if(document.getElementById("Interruttore").src=="Immagini/Off.jpg")
		video.play;
}

function test(){
	document.getElementById("Interruttore").src="Immagini/On.jpg";

}