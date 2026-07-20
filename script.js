function login() {

    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (password === "evansjellyfish") {

        window.location.href = "home.html";

    } else {

        error.textContent = "Incorrect password.";

    }

}

// Allow pressing Enter to log in
document.addEventListener("DOMContentLoaded", function () {

    const passwordBox = document.getElementById("password");

    passwordBox.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            login();

        }

    });

});
