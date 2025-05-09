let welcome_msg = document.getElementById("welcome");
let username1 = localStorage.getItem("username");

if (username1 != null){

    welcome_msg.innerText = `welcome back ${username1}`;

    let nav_list = document.getElementById("nav-list1");

    let list_item = document.createElement("li");
    list_item.classList.add("nav-item");
    
    let a = document.createElement("a");
    list_item.classList.add("nav-link");
    a.href = "../pages/addPost.html"

    let button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-dark");
    button.innerText = "Add Post"

    a.appendChild(button)
    list_item.appendChild(a);
    nav_list.appendChild(list_item);

    

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
    

}



