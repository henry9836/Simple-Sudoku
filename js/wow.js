function goToAdmin(){
    window.location = "admin.html"
}

function goHome(){
    window.location = "https://henry9836.github.io/bootstrapSandbox/"
}

function splashZone(){
    //alert("⚠️⚠️⚠️ You are about to enter the splash zone!!! ⚠️⚠️⚠️ \n 🎣💦");
}

function playEpicAudio(){
    let theAudios = ["long.mp3", "ad.mp3", "p.mp3", "podcast.mp3", "strum.mp3"]
    var elementToPlay = Math.floor(Math.random() * theAudios.length);
    var audio = document.createElement('div');
    audio.innerHTML = '<audio autoplay id="music"> <source src="'+ 'music/'+ theAudios[elementToPlay] +'" type="audio/mp3"> </audio>';
    document.body.appendChild(audio);
    document.getElementById('music').play();
}
