const collection = document.querySelector(".collection");
const songListSection = document.querySelector(".songList");

// const newEntry = divPrototype.cloneNode(true);

// Functions
function submitHandler(event) {
    event.preventDefault();
    newEntry(event.target);
}

function newEntry([nameArtist, nameAlbum, nameSongs, dateAlbum]) {

    const newEntry = document.createElement("div")
    const creationDate = Date.parse(new Date());
    newEntry.classList.add("item", "border", "item-background");
    newEntry.innerHTML = `
        <p class="nomeArtista">${nameArtist.value}</p>
        <p class="nomeAlbum">${nameAlbum.value}</p>
        <div class="hidden"  id="listaCanzoni">
            <ol>
                ${nameSongs.value.split(",").map((item) => ("<li>" + item + "</li>")).join("\n")}
            </ol>
        </div>
        <p class="dataAlbum">${dateAlbum.value}</p>
        <p class="numIndex hidden">${creationDate}</p>
        <button onclick="removeEntry(event)">Rimuovi</button>
        <button onclick="songList(event)">Lista canzoni</button>`
    collection.append(newEntry);
}

function removeEntry(event) {
    event.target.parentNode.remove();
}

function songList(event) {
    const listaCanzoni = event.target.parentNode.querySelector("#listaCanzoni");
    console.log(songListSection)
    songListSection.innerHTML = listaCanzoni.innerHTML;
}

function saveEntries() {
    window.localStorage.setItem("collection", collection.innerHTML);
}
function loadEntries() {
    const oldEntries = window.localStorage.getItem("collection");
    collection.innerHTML = oldEntries;
}

function orderAlphabetical() {
    const entries = [...collection.childNodes];
    const orderedEntries = (entries.sort((a, b) => compare(a, b, 0)));
    for (let entry of orderedEntries) collection.appendChild(entry);
}


function orderByIndex() {
    const entries = [...collection.childNodes];
    const orderedEntries = (entries.sort((a, b) => compare(a, b, 4)));
    for (let entry of orderedEntries) collection.appendChild(entry);
}

function compare(firstNode, secondNode, childNum) {
    if (childNum === 0) {
        const firstChild = firstNode.children[childNum].textContent.toLowerCase();
        const secondChild = secondNode.children[childNum].textContent.toLowerCase();
        if (firstChild > secondChild) return 1;
        if (firstChild < secondChild) return -1;
        else return 0;
    }
    else {
        const firstChild = Number(firstNode.children[childNum].textContent);
        const secondChild = Number(secondNode.children[childNum].textContent);
        if (firstChild > secondChild) return 1;
        if (firstChild < secondChild) return -1;
    }

}
// (entries.map(node => node.children[0].textContent.toLowerCase()))