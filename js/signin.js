document.getElementById("login").addEventListener("click", function() {
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            callback(xmlHttp.responseText);
            console.log("working");
        } else{
            console.log("not working")
        }
    }
    xmlHttp.open("GET","http://localhost:8080/api/user/login/check?username=" + username+ "&password=" + password, true);
    xmlHttp.send(null);
    console.log(xmlHttp.status);
});