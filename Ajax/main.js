var btn = document.querySelector("button");

btn.addEventListener("click", function(){
    
    var newXHR = new XMLHttpRequest();
    var dogUrl = "https://dog.ceo/api/breeds/image/random";
    newXHR.open("GET", dogUrl);



    newXHR.onload = function(){
        if(newXHR.status === 200){
            var Obj = JSON.stringify(newXHR.responseText);
            var dog = document.querySelector("#dog");

            var myJson = JSON.parse(Obj);
            dog.append(myJson);

        }
    }

    newXHR.send();
})

