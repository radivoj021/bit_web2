function send(){
    var chatW = document.getElementById("chatW");
    var div = document.createElement("div");
    var message = document.createElement("p");
    var txt = document.getElementById("txt").value;
    var msg = document.createTextNode(txt);

    message.appendChild(msg);
    div.appendChild(message);
    chatW.appendChild(div);

    document.getElementById("txt").value = "";
    chatW.scrollTo(0, 10000);
 }