document.getElementById("go").addEventListener("click", function() {
    let first = document.getElementById("firstname").value;
    //console.log(firstName);
    let last= document.querySelector(".lastname").value;
    //console.log(lastname);
    let em = document.querySelector(".email").value;
    let phone = document.querySelector(".phonenumber").value;
    let user = document.querySelector(".username").value;
    let pass = document.querySelector(".password").value;
    let add = document.querySelector(".address").value;

    //let myJSon = "{'firstname':'" + firstName + "','lastname':" + "'" + lastname+ "','email':'" + email + "','phonenumber':'" + phoneNumber + "','username':'" + username + "','password':'" + password + "','address':'" + address + "'}"; 
    //console.log(myJSon);
    let myJson = JSON.stringify({firstName: first, lastName: last, email: em, phoneNumber: phone, userName: user, password: pass, address: add});

    let http = new XMLHttpRequest();
    http.open("POST","http://localhost:8080/api/user/create",true);
    http.setRequestHeader("Content-Type", "application/json");

    console.log(myJson);
    http.send(myJson);

});