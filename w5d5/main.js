/*function secondList() {

    document.getElementById('second').className = "second";

}

secondList();


function selectAll() {
    var items = document.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++) {
        items[i].className = "itemcolor";
    }
}*/

/* selectAll();

function elementAndId(id, element, style) {
    var selected = document.getElementsByTagName(id);
    var elements = selected.querySelectorAll(element);
    for (var i = 0; i < elements.length; i++) {
        elements[i].className = style;
    }
}
elementAndId("third", "li", "thirdlis"); */

/* function removeClass() {
    var fithlist = document.getElementById("fithlist");

    fithlist.querySelector(".active").className = "";


}

removeClass();

function setClass() {
    var first = document.getElementById("firstList");
    first.firstElementChild.className = "active";
}
setClass();


 */

function present() {
    var nav = document.getElementById('nav').firstElementChild.textContent;

    window.alert(nav);

}
present();


