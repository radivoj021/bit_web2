var field = document.querySelector("#field");
var ball = document.querySelector("#ball");

field.addEventListener("click", getPosition, false);

function getPosition(e){
    var xPos = e.clientX - (ball.offsetWidth / 2);
    var yPos = e.clientY - (ball.offsetWidth / 2);

    var translate = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    ball.style.transform =  translate;
}