var field = document.getElementById("field");
var player = document.getElementById("player");


field.addEventListener("click", getClick, false);

function getClick(e){
    var x = e.clientX - (player.offsetWidth);
    var y = e.clientY - (player.offsetWidth);

    var translatedPosition = "translate3d(" + x + "px, " + y + "px, 0)";
    player.style.transform = translatedPosition;
}