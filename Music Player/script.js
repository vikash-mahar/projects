

let progress = document.getElementById("progress");
const song = document.getElementById("song");
let ctrlicon = document.getElementById("ctrlicon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

document.getElementsByClassName("playpause").addEventListener("click", playpause());

function playpause(){
    console.log("hello");

    if(ctrlicon.classList.contains("fa-pause")){
        song.pause();
    ctrlicon.classList.remove("fa-pause");
    ctrlicon.classList.add("fa-play");
    }

    else{
        song.play();
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
    }
}


if(song.play()){
    setInterval(()=>{
        progress.vlue=song.currentTime;
    },500);
}

progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
}