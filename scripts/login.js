let login_btn = document.getElementById("login-btn");
let login_username = document.getElementById("username-id");
let login_password = document.getElementById("password-id");

login_btn.addEventListener("click", () => {

    // console.log(login_username.value);
    // console.log(login_password.value);

    let err_msg = document.getElementById("err-msg");

    let username =  localStorage.getItem("username", login_username.value);
    let password = localStorage.getItem("password", login_password.value);

    if (username === login_username.value && password === login_password.value) {

        // window.location.href = '../'; //one level up
        // ../index.html

        window.location.href = "../index.html";

        // window.location.replace("http://127.0.0.1:5500/index.html");

        

    } else {
        err_msg.innerText = "username or password does not exist";
    }

})