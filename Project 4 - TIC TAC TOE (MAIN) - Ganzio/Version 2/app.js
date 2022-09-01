let turn = 0;
// moved=document.querySelector(".move")
// console.log(moved);
let endGame = document.querySelector(".endgame");

let player_X_array = [];
let player_O_array = [];
let gameState = true;
let playerMessage = undefined;
// player_X_array = ["2","0","3"];
// console.log(player_X_array.includes("2"&&"3"))


function displaySimbol(event){
    // console.log(event.target.children[0]);
    let tile = event.target;
    if(!gameState) return;
    if(turn%2 == 0){
        if(tile.children[0] == "X" || tile.children[0] == "O") return; //funziona o è dovuto ad errore 1?
        tile.children[0].innerText = "X";
        turn++;
        player_X_array.push(tile.id);
        // console.log(player_X_array);
        checkWinner(player_X_array, playerMessage = "X ha vinto");
    }
    else{
        if(tile.children[0] == "X" || tile.children[0] == "O") return;
        tile.children[0].innerText = "O";
        turn++;
        player_O_array.push(tile.id);
        // console.log(player_O_array);
        checkWinner(player_O_array, playerMessage = "O ha vinto");
    }
}

function checkWinner(arr, player){
    let tile0 = arr.includes("0");
    let tile1 = arr.includes("1");
    let tile2 = arr.includes("2");
    let tile3 = arr.includes("3");
    let tile4 = arr.includes("4");
    let tile5 = arr.includes("5");
    let tile6 = arr.includes("6");
    let tile7 = arr.includes("7");
    let tile8 = arr.includes("8");
    let tile9 = arr.includes("9");
    let tile10 = arr.includes("10");
    let tile11 = arr.includes("11");
    let tile12 = arr.includes("12");
    let tile13 = arr.includes("13");
    let tile14 = arr.includes("14");
    let tile15 = arr.includes("15");

    //righe
    if( tile0 && tile1 && tile2 && tile3 ){
        endGame.children[0].innerText = player;
        gameState = false;
    } 
    if( tile4 && tile5 && tile6 && tile7 ){
        endGame.children[0].innerText = player;
        gameState = false;
    } 
    if( tile8 && tile9 && tile10 && tile11 ){
        endGame.children[0].innerText = player;
        gameState = false;
    } 
    if( tile12 && tile13 && tile14 && tile15 ){
        endGame.children[0].innerText = player;
        gameState = false;
    } 
    //colonne
    if( tile0 && tile4 && tile8 && tile12 ){
        endGame.children[0].innerText = player;
        gameState = false;
    } 
    if( tile1 && tile5 && tile9 && tile13 ){
        endGame.children[0].innerText = player;
        gameState = false;
    } 
    if( tile2 && tile6 && tile10 && tile14 ){
        endGame.children[0].innerText = player;
        gameState = false;
    } 
    if( tile3 && tile7 && tile11 && tile15 ){
        endGame.children[0].innerText = player;
        gameState = false;
    } 
    //diagonali
    if( tile3 && tile6 && tile9 && tile12 ){
        endGame.children[0].innerText = player;
        gameState = false;
    } 
    if( tile0 && tile5 && tile10 && tile15 ){
        endGame.children[0].innerText = player;
        gameState = false;
    } 


    // console.log(arr.includes("0"&&"1"&&"2"&&"3")) error 2 : mi dà true a cazzo, non va bene
    // console.log(arr.includes("4"&&"5"&&"6"&&"7"))
    // if(arr.includes("0"&&"1"&&"2"&&"3")||arr.includes("4"&&"5"&&"6"&&"7")) console.log("win");
}


// error message 1: cannot set properties of undefined at displaySimbol
// error 2 : true a cazzo