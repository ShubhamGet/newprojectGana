const music=document.querySelector("audio")
const img=document.querySelector("img")
const play=document.getElementById('play');
const artist=document.getElementById('artist');
const title=document.getElementById('title');



isPlaying=false;

const playMusic=()=>{
    isPlaying=true;
    music.play();
    play.classList.replace('fa-play-circle','fa-pause');
}
const pauseMusic=()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace('fa-pause','fa-play-circle');
}

play.addEventListener('click',()=>{
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
})



