var video = document.getElementById("myVideoPlayer");
function stopVideo(){
     video.pause();
     video.currentTime = 0;
}
function playVideo(){
    video.play();
}