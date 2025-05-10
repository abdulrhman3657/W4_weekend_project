let welcome_msg = document.getElementById("welcome");
welcome_msg.innerText = `welcome back ${localStorage.getItem("username")}`;


let data = document.getElementById("user-data");

data.innerText += ` ${localStorage.getItem("username")}`;


let user_post_title =  localStorage.getItem("title")

if(user_post_title != null){
    let user_post = document.getElementById("user-post");
    user_post.classList.remove("d-none");

    let card_img = document.getElementById("card-img");
    card_img.src = localStorage.getItem("url");

    let post_title = document.getElementById("post-title");
    post_title.innerText = user_post_title;

    let post_txt = document.getElementById("post-txt");
    post_txt.innerText = localStorage.getItem("text");
}