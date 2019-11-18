var btn = document.querySelector("button");

btn.addEventListener("click", function () {
    var dog = "https://dog.ceo/api/breeds/image/random";

    var newXHR = new XMLHttpRequest();

    newXHR.open("GET", dog);

    newXHR.onload = function () {
        if (newXHR.status === 200) {
            var data = JSON.parse(newXHR.responseText);
            console.log(data);
        }
    }

    newXHR.send();
})





