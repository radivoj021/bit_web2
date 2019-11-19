var btn = document.querySelector("button");

btn.addEventListener("click", function () {

    var newXHR = new XMLHttpRequest();
    var dogUrl = "https://dog.ceo/api/breeds/image/random";
    newXHR.open("GET", dogUrl);

    btn.addEventListener("load", function () {

        var data = JSON.parse(newXHR.responseText);
        var link = document.createElement("img");
        link.setAttribute("src", dogUrl.message);

        var dog = document.querySelector("#dog");
        dog.append(link);
    })
    newXHR.send();
})
