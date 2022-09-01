const imageShow = document.querySelectorAll(".image-show");
const imageTable = document.querySelector(".image__table");
const imageTableQuery = document.querySelector(".image__table__query");
const selectNumberImages = document.querySelector(".select");



function getPhotos(imageFetch) {
    // Reset table, questo reset mi avrebbe evitato un bel po' di logica...
    imageTable.innerHTML = "";
    imageTableQuery.innerHTML = "";

    // Fill table
    imageFetch.forEach((image, index) => {
        let rowSelector = document.querySelector(`.row_${Math.floor(index / 5)}`);
        let imgSelector = document.querySelector(`.image__${index}`);
        let rowSelectorQuery = document.querySelector(`.row_${Math.floor(index / 3)}__query`)
        let imgSelectorQuery = document.querySelector(`.image__${index}__query`);

        // Check row exist
        if (!rowSelector) {
            imageTable.insertAdjacentHTML(`beforeend`, `<tr class="row_${Math.floor(index / 5)}"></tr>`);
            rowSelector = document.querySelector(`.row_${Math.floor(index / 5)}`);
        }
        // Check se il table item > img esiste, se si sostituisce il source, se no lo crea....
        // Useless.... bastava mettere un cazzo di resett aaaaaaaaa, però ormai lo lascio, così mi ricordo che sono un cazzone
        // imgSelector?.src ? imgSelector.src = image.src.small : rowSelector.insertAdjacentHTML(`beforeend`,
        //     `<td><img class="image__${index}" src="${image.src.small}" ></td>`);
        rowSelector.insertAdjacentHTML(`beforeend`,
            `<td><img class="image__${index}" src="${image.src.small}" ></td>`);
        // Check row exist
        if (!rowSelectorQuery) {
            imageTableQuery.insertAdjacentHTML(`beforeend`, `<tr class="row_${Math.floor(index / 3)}__query"></tr>`);
            rowSelectorQuery = document.querySelector(`.row_${Math.floor(index / 3)}__query`)
        }
        // Check se il table item > img esiste, se si sostituisce il source, se no lo crea....
        // Useless.... bastava mettere un cazzo di resett aaaaaaaaa, però ormai lo lascio, così mi ricordo che sono un cazzone
        // imgSelectorQuery?.src ? imgSelectorQuery.src = image.src.small : rowSelectorQuery.insertAdjacentHTML(`beforeend`,
        //     `<td><img class="image__${index}__query" src="${image.src.small}" ></td>`);
        rowSelectorQuery.insertAdjacentHTML(`beforeend`,
            `<td><img class="image__${index}__query" src="${image.src.small}" ></td>`);

    });

}

// `https://api.pexels.com/v1/search?per_page=20&query=${query}`
// Fetch data
async function fetchQuery(query) {
    const data = await fetch(`https://api.pexels.com/v1/search?per_page=${selectNumberImages.value}&query=${query}`, {
        headers: {
            Authorization: "563492ad6f91700001000001d2ccecb60128454ca90216fabea04a20"
        }
    })
    const photoBook = await data.json();
    getPhotos(photoBook.photos)
    // .then(resp => {
    //     return resp.json()
    // })
    // .then(data => {
    //     console.log(data);
    //     getPhotos(data.photos);
    // })
}

function submitHandler(event) {
    event.preventDefault();
    fetchQuery(event.target.children[0].value);
    event.target.children[0].value = "";
}

