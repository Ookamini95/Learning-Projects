
// function addText() {

//     let text = document.querySelector("#testo");
//     let phrase =  document.querySelector("#phrases");
//     let wordArr = "" ;
//     wordArr += phrase.innerText;
//     wordArr += text.value;
//     phrase.innerHTML = wordArr;
// }



function addText() {

    let text = document.querySelector("#testo");
    let phrase =  document.querySelector("#phrases");


    phrase.innerHTML = text.value;
}