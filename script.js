function login() {

    let password = document.getElementById("password").value;

    if(password === "1234"){

        window.location.href = "home.html";

    }else{

        document.getElementById("error").innerHTML =
        "Incorrect password.";

    }

}
