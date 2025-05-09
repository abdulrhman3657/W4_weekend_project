let add_post_btn = document.getElementById("add-post-btn");
let post_title = document.getElementById("post_title");
let post_txt = document.getElementById("post_txt");
let post_img_url = document.getElementById("post_img_url");


add_post_btn.addEventListener("click", () => {

    // console.log(post_title.value)
    // console.log(post_txt.value)
    // console.log(post_img_url.value)


    let title = post_title.value;
    let text = post_txt.value;
    let url = post_img_url.value;


    localStorage.setItem("title", title);
    localStorage.setItem("text", text);
    localStorage.setItem("url", url);


})