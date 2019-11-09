var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}




var audio = new Audio("./img/tabern_sound.webm");
var pelea = new Audio("./img/pelea.webm");
var bar2 = new Audio("./img/bar2.webm");
var lluvia = new Audio("./img/chuvia.webm");
var cementerio = new Audio("./img/cementerio_s.webm");
var intro = new Audio("./img/sithuaye.webm");
var tambores = new Audio("./img/drums.webm");
intro.volume = 0.7;

lluvia.loop = true;
audio.loop = true;
pelea.loop = true;
bar2.loop = true;
cementerio.loop = true;
intro.loop = true;
tambores.loop = true;

var isPlaying = false;



plays(audio);
pauses(audio);
plays(pelea);
pauses(pelea);
plays(bar2);
pauses(bar2);
plays(lluvia);
pauses(lluvia);
plays(cementerio);
pauses(cementerio);
plays(intro);
pauses(intro);
plays(tambores);
pauses(tambores);

function togglePlay(wat) {
  if (isPlaying) {
    wat.pause();
  } else {
    wat.play();
  }
};

function plays(aud){
  aud.onplaying = function() {
  isPlaying = true;
  };
}
function pauses(aud){
  aud.onpause = function() {
    isPlaying = false;
  };
}





document.addEventListener('deviceready', onDeviceReady.bind(this), false);

   function onDeviceReady() {

   StatusBar.hide(); // Statusbar is hiding

  }

$(document).ready(function() {
    
    $("#rack").on("click",stand);
    $(".axe1").on("click",axe1);
    $(".axe2").on("click",axe2);
    $(".axe3").on("click",axe3);
    $(".shield1").on("click",shield1);
    $(".shield2").on("click",shield2);
    $(".rack").on("click",stand);
    $(".pj-check").on("click",ocultarPj);
    
    
    
});





function axe1(){
    $("#axe1").toggle();
}
function axe2(){
  $("#axe2").toggle();
}
function axe3(){
  $("#axe3").toggle();
}
function shield1(){
    $("#shield1").toggle();
}
function shield2(){
  $("#shield2").toggle();
}

function stand(){
    $("#stand").toggle();
}


function ocultarPj(){
  $(".pj").toggle();
}