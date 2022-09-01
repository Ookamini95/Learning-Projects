const imageShow = document.querySelectorAll(".image-show");
// elements -> src = fetchRequest url

function getPhotos(imageFetch) {
    for (let [index, image] of imageShow.entries()) {
        image.src = imageFetch[index].src.small;
    }
}


function fetchQuery(query) {
    fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
            Authorization: "563492ad6f91700001000001d2ccecb60128454ca90216fabea04a20"
        }
    })
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            getPhotos(data.photos)
        })
}

function submitHandler(event) {
    event.preventDefault();
    // console.log(event.target.children[0].value);
    fetchQuery(event.target.children[0].value);
    event.target.children[0].value = "";
}

// fetch("https://api.pexels.com/v1/search?query=banana", {
//     headers: {
//         Authorization: "563492ad6f91700001000001d2ccecb60128454ca90216fabea04a20"
//     }
// })
//     .then(resp => {
//         return resp.json()
//     })
//     .then(data => {
//         getPhotos(data.photos)
//     })

// console.log("qui", imageResults);

// document.querySelector(".test").src = '';
