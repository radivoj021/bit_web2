/*function color() {
    var element = document.querySelector('body');
    element.classList.toggle("color");
}


function cancelToggle() {

    document.getElementById('first').removeAttribute('onclick');


}*/
//var element = document.getElementById('first');

first.onclick = function () {

    var aaa = document.querySelector('body').classList.toggle("color");
};

//var element2 = document.getElementById('second');

/*
second.onclick = function () {

};

function send() {
    var div = document.createElement('div');
    var elem = document.createElement('p');
    var poruka = document.getElementById('input').value;
    var text = document.createTextNode(poruka);
    var chatWindow = document.getElementById('chatWindow');
    elem.appendChild(text);
    div.appendChild(elem);
    chatWindow.appendChild(div);
    var poruka = document.getElementById('input').value = "";
}
 */


function move() {
    var imgPos1 = event.clientX;
    var imgPos2 = event.clientY;


    alert(imgPos1 + " " + imgPos2);
}