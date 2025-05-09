

let comment_btn = document.getElementById("comment-btn");
let comment_input = document.getElementById("comment-input");

let list = document.getElementById("comments-list");
list.style.listStyle = "none";


let comments_arr = [];


comment_btn.addEventListener("click", () => {

    let comment_txt = comment_input.value;
    let username = localStorage.getItem("username")

    if(username == null){
        console.log("you are not logged in");
        return;
    }

    let item = document.createElement("li");
    item.classList.add("p-3");
    item.classList.add("my-3");
    item.classList.add("border");
    item.classList.add("rounded");


    let item_div = document.createElement("div");
    item_div.classList.add("d-flex");
    item_div.classList.add("align-items-center");

    let p1 = document.createElement("p");
    p1.classList.add("fw-bold");
    p1.classList.add("rounded-3");
    p1.classList.add("p-3");
    p1.classList.add("bg-light");
    p1.classList.add("text-dark");
    p1.innerText = username;

    let p2 = document.createElement("p");
    p2.classList.add("px-3");
    p2.innerText = comment_txt;

    // localStorage.setItem("username_comment", username);
    localStorage.setItem("comment_txt", comment_txt);

    item_div.appendChild(p1);
    item_div.appendChild(p2);
    item.appendChild(item_div);
    list.appendChild(item);
})

let username = localStorage.getItem("username")

if(username != null){
    let comment_txt = localStorage.getItem("comment_txt");
    let item = document.createElement("li");
    item.classList.add("p-3");
    item.classList.add("my-3");
    item.classList.add("border");
    item.classList.add("rounded");


    let item_div = document.createElement("div");
    item_div.classList.add("d-flex");
    item_div.classList.add("align-items-center");

    let p1 = document.createElement("p");
    p1.classList.add("fw-bold");
    p1.classList.add("rounded-3");
    p1.classList.add("p-3");
    p1.classList.add("bg-light");
    p1.classList.add("text-dark");
    p1.innerText = username;

    let p2 = document.createElement("p");
    p2.classList.add("px-3");
    p2.innerText = comment_txt;

    localStorage.setItem("username_comment", username);
    localStorage.setItem("comment_txt", comment_txt);

    item_div.appendChild(p1);
    item_div.appendChild(p2);
    item.appendChild(item_div);
    list.appendChild(item);
}

