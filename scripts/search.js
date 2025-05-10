let posts = [
    {
        title: "Sputnik 1",
        post_text: "the first artificial Earth satellite.",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9_%D0%B2_%D0%BC%D0%B8%D1%80%D0%B5_%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA_%D0%97%D0%B5%D0%BC%D0%BB%D0%B8.jpg/250px-%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9_%D0%B2_%D0%BC%D0%B8%D1%80%D0%B5_%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA_%D0%97%D0%B5%D0%BC%D0%BB%D0%B8.jpg",
        tag: "spaceship",
        date: 1950
    },
    {
        title: "Luna 1",
        post_text: "first artificial satellite in heliocentric orbit.",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/RIAN_archive_510848_Interplanetary_station_Luna_1_-_blacked.jpg/500px-RIAN_archive_510848_Interplanetary_station_Luna_1_-_blacked.jpg",
        tag: "satellite",
        date: 1950
    },
    {
        title: "Venera 1",
        post_text: "First probe to another planet; Venus flyby",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Venera_1_%28a%29_%28Memorial_Museum_of_Astronautics%29.JPG/500px-Venera_1_%28a%29_%28Memorial_Museum_of_Astronautics%29.JPG",
        tag: "spaceship",
        date: 1960
    }
]

let type_btn = document.getElementById("type-btn");

type_btn.addEventListener("click", () => {

    let search = document.getElementById("search");
    search.classList.add("d-none");

    let spaceship_input = document.getElementById("spaceship-input");
    let satellite_input = document.getElementById("satellite-input");

    if (spaceship_input.checked) {

        let arr = posts.filter((post) => {
            return post.tag == "spaceship"
        })

        let place = document.getElementById("id1");

        for(let i = 0; i < arr.length; i++){
            console.log(arr[i].url)
            console.log(arr[i].post_text)
            console.log(arr[i].title)

            let div = document.createElement("div")

            let img = document.createElement("img")
            img.src = arr[i].url

            // img.width = "300"
            img.classList.add("w-50");

            let title = document.createElement("h3");
            title.innerText = arr[i].title;

            let text = document.createElement("p");
            text.innerText = arr[i].post_text;

            // div.classList.add("border");
            // div.classList.add("d-flex");
            
            div.appendChild(img)
            div.appendChild(title)
            div.appendChild(text)
            place.appendChild(div)
        }
        

    } else if (satellite_input.checked) {

                let arr = posts.filter((post) => {
            return post.tag == "satellite"
        })

        let place = document.getElementById("id1");

        for(let i = 0; i < arr.length; i++){
            console.log(arr[i].url)
            console.log(arr[i].post_text)
            console.log(arr[i].title)

            let div = document.createElement("div")

            let img = document.createElement("img")
            img.src = arr[i].url

            img.width = "300"

            let title = document.createElement("h3");
            title.innerText = arr[i].title;

            let text = document.createElement("p");
            text.innerText = arr[i].post_text;
            
            div.appendChild(img)
            div.appendChild(title)
            div.appendChild(text)
            place.appendChild(div)
        }

    } else {
        console.log("you must choose a tag")
    }
    

})