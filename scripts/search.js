let posts = [
    {
        title: "Sputnik 1",
        post_text: "the first artificial Earth satellite.",
        url: "",
        tag: "spaceship",
        date: 1950
    },
    {
        title: "Luna 1",
        post_text: "first artificial satellite in heliocentric orbit.",
        url: "",
        tag: "satellite",
        date: 1950
    },
    {
        title: "Venera 1",
        post_text: "First probe to another planet; Venus flyby",
        url: "",
        tag: "spaceship",
        date: 1960
    }
]

let type_btn = document.getElementById("type-btn");

type_btn.addEventListener("click", () => {

    let spaceship_input = document.getElementById("spaceship-input");
    let satellite_input = document.getElementById("satellite-input");

    if (spaceship_input.checked) {

        let arr = posts.filter((post) => {
            return post.tag == "spaceship"
        })

        let img = document.getElementById("img");
        let title = document.getElementById("title");
        let type_btn = document.getElementById("text");

        for(let i = 0; i < arr.length; i++){
            console.log(arr[i].url)
            console.log(arr[i].post_text)
            console.log(arr[i].title)
        }
        

    } else if (satellite_input.checked) {

        console.log(satellite_input.checked);

    } else {
        console.log("you must choose a tag")
    }
    

})