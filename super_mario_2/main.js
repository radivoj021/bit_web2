var mario = document.getElementById("mario");
var game  = document.getElementById("game");

document.onkeydown = checkKeyDown;
document.onkeyup = checkKeyUp;


function checkKeyDown(e){
    if(e.keyCode == '39'){
        mario.className = "";
        mario.classList.add("marioRun");
        game.classList.add("game1");
    }
    else if(e.keyCode == '37'){
        mario.className = "";
        mario.classList.add("marioRun1");
        game.classList.add("game2");
    }
}

function checkKeyUp(e){
    if(e.keyCode == '39'){
        mario.className = "";
        mario.classList.add("mario");
        game.className = "";

    }
    else if(e.keyCode == '37'){
        mario.className = "";
        mario.classList.add("mario1");
        game.className = "";
    }
}