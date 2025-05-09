let welcome_msg = document.getElementById("welcome");
welcome_msg.innerText = `welcome back ${localStorage.getItem("username")}`;


let data = document.getElementById("user-data");

data.innerText += ` ${localStorage.getItem("username")}`;