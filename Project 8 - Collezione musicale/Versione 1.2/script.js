// const test = document.querySelector("#demo");

//spaghetti code v1
const nameArtista = document.querySelector("#nameArtista");
const nameAlbum = document.querySelector("#nameAlbum");
const nameCanzoni = document.querySelector("#nameCanzoni");
const dateAlbum = document.querySelector("#dateAlbum");

// index for ordering by entryDate
let index = 0;

const linkImg = document.querySelector("#linkImg"); //new features for the future

// Songlist

const songListSection = document.querySelector(".songlist");

// new Entry
const divPrototype = document.querySelector(".item");
const collection = document.querySelector(".collection");


// spaghetti code v1
function newEntry() {
    const newEntry = divPrototype.cloneNode(true);
    newEntry.classList.remove("hidden-item");
    newEntry.children[1].innerText = nameArtista.value
    nameArtista.value = "";
    newEntry.children[2].innerText = nameAlbum.value
    nameAlbum.value = "";
    newEntry.children[3].innerText = nameCanzoni.value
    nameCanzoni.value = "";
    newEntry.children[4].innerText = dateAlbum.value
    dateAlbum.value = "";
    index = new Date();
    // console.log(Date.parse(index));
    newEntry.children[5].innerText = index;

    //imagine copertina album
    if (linkImg.value !== ``) {
        newEntry.querySelector("img").src = linkImg.value
        linkImg.value = "";

    }
    else newEntry.querySelector("img").classList.add("hidden");


    // index++; // invece usare date(), anche se, rimuovendo index-- in removeEntry() funziona bene
    collection.appendChild(newEntry);
}

function removeEntry(event) {
    event.target.parentNode.remove();
    // index--; // questo può causare bug
}

function orderAlphabetical() {
    const itemNode = document.querySelectorAll(".item");
    const items = [...itemNode];
    items.sort(function (a, b) {
        return compare(a, b);
    });
    for (let item of items) {
        collection.appendChild(item);
    }
}

function orderByIndex() {
    const itemNode = document.querySelectorAll(".item");
    const items = [...itemNode];
    items.sort(
        // function (a, b) {
        // index version
        // if (Number(a.children[4].innerText) < Number(b.children[4].innerText)) {
        //     return -1;
        // }
        // if (Number(a.children[4].innerText) > Number(b.children[4].innerText)) {
        //     return 1;
        // }
        // // a must be equal to b
        // return 0;
        // }
        (a, b) => {
            return Date.parse(a.children[4].textContent) > Date.parse(b.children[4].textContent) ? 1 : Date.parse(a.children[4].textContent) < Date.parse(b.children[4].textContent) ? -1 : 0
        }
    )
    for (let item of items) {
        collection.appendChild(item);
    }

}



function compare(a, b) {
    if (a.children[0].innerText.toLowerCase() < b.children[0].innerText.toLowerCase()) {
        return -1;
    }
    if (a.children[0].innerText.toLowerCase() > b.children[0].innerText.toLowerCase()) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

function appendSonglist(arr) {
    if (arr) {
        for (let i = 0; i < arr.length; i++) {
            const songElement = document.createElement("p");
            songElement.classList.add("singoli");
            songElement.innerText = `${i + 1}. ${arr[i]}`;
            songListSection.appendChild(songElement);
        }
    }
}

function songlistClear() {

    const canzone = songListSection.getElementsByClassName("singoli");
    while (canzone[0]) {
        canzone[0].remove();
    }
}

function getSongs(event) {
    console.log(event.target);
    let songList;
    let songArray;
    // if(event.target.id !== `removeInsertion` && event.target.parentNode.id !== `collection` ) 
    // console.log(event.target.parentNode);
    if (event.target.id !== `removeInsertion` && event.target.parentNode.id !== `collection`) {
        songList = event.target.parentNode.querySelector(".nomeCanzoni");
        songArray = songList.innerText.split(",");
    }
    if (event.target.parentNode.id === `collection`) {
        songList = event.target.querySelector(".nomeCanzoni");
        songArray = songList.innerText.split(",");
    }
    songlistClear();
    appendSonglist(songArray);
}



// PROBLEMI DI SORTING

// porcodiiio
// function sort(array){
//     const orderedArray = [];
//     const len = array.length;
//     console.warn(array);
//     for(let i = 0; i<(len);i++){
//         let max = array[0];
//         console.log(max);
//         for (let item of array){
//             if(item < max) max = item;
//         }
//         orderedArray.push(max);
//         array.splice(array.indexOf(max),1);
//         console.log(array);
//         // console.log(array);
//     }
//     return orderedArray;
// }
// sort(testArray);

