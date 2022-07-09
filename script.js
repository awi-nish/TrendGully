var video = document.getElementById("myVideoPlayer");
function stopVideo(){
     video.pause();
     video.currentTime = 0;
}
function playVideo(){
    video.play();
}


var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let menuEl=document.getElementById('menu');
let signUpel=document.getElementById("signUp");
menuEl.addEventListener("click",()=>{
    menuEl.classList.toggle("open");
    signUpel.classList.toggle("ml-3");
    signUpel.classList.toggle("mt-3");
});