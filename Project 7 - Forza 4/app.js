let turn = 0;

const arrBoard = [[], [], [], [], [], [], []]


function fillColumnOne(event) {
    const colOne = document.querySelectorAll(".col-one");
    //console.log(colOne);

    //console.log(colOne[5].children[0].classList.contains("inactive"));

    for (let i = colOne.length - 1; i >= 0; i--) {
        if (colOne[i].children[0].classList.contains("inactive")) {
            colOne[i].children[0].classList.remove("inactive");
            if (turn % 2 == 0) {
                colOne[i].children[0].classList.add("player-one-color");
                colOne[i].children[0].classList.add("active");
                arrBoard[0].push("1");
                turn++;
            }
            else {
                colOne[i].children[0].classList.add("player-two-color");
                colOne[i].children[0].classList.add("active");
                arrBoard[0].push("2");
                turn++;
            }
            
            checkWinner(arrBoard);
            break;
        }
    }

}
function fillColumnTwo(event) {
    const colTwo = document.querySelectorAll(".col-two");
    //console.log(colOne);

    //console.log(colOne[5].children[0].classList.contains("inactive"));

    for (let i = colTwo.length - 1; i >= 0; i--) {
        if (colTwo[i].children[0].classList.contains("inactive")) {
            colTwo[i].children[0].classList.remove("inactive");
            if (turn % 2 == 0) {
                colTwo[i].children[0].classList.add("player-one-color");
                colTwo[i].children[0].classList.add("active");
                arrBoard[1].push("1");
                turn++;
            }
            else {
                colTwo[i].children[0].classList.add("player-two-color");
                colTwo[i].children[0].classList.add("active");
                arrBoard[1].push("2");
                turn++;
            }
            
            checkWinner(arrBoard);
            break;
        }
    }

}
function fillColumnThree(event) {
    const colThree = document.querySelectorAll(".col-three");
    //console.log(colOne);

    //console.log(colOne[5].children[0].classList.contains("inactive"));

    for (let i = colThree.length - 1; i >= 0; i--) {
        if (colThree[i].children[0].classList.contains("inactive")) {
            colThree[i].children[0].classList.remove("inactive");
            if (turn % 2 == 0) {
                colThree[i].children[0].classList.add("player-one-color");
                colThree[i].children[0].classList.add("active");
                arrBoard[2].push("1");
                turn++;
            }
            else {
                colThree[i].children[0].classList.add("player-two-color");
                colThree[i].children[0].classList.add("active");
                arrBoard[2].push("2");
                turn++;
            }
            
            checkWinner(arrBoard);
            break;
        }
    }

}
function fillColumnFour(event) {
    const colFour = document.querySelectorAll(".col-four");
    //console.log(colOne);

    //console.log(colOne[5].children[0].classList.contains("inactive"));

    for (let i = colFour.length - 1; i >= 0; i--) {
        if (colFour[i].children[0].classList.contains("inactive")) {
            colFour[i].children[0].classList.remove("inactive");
            if (turn % 2 == 0) {
                colFour[i].children[0].classList.add("player-one-color");
                colFour[i].children[0].classList.add("active");
                arrBoard[3].push("1");
                turn++;
            }
            else {
                colFour[i].children[0].classList.add("player-two-color");
                colFour[i].children[0].classList.add("active");
                arrBoard[3].push("2");
                turn++;
            }
            
            checkWinner(arrBoard);
            break;
        }
    }

}
function fillColumnFive(event) {
    const colFive = document.querySelectorAll(".col-five");
    //console.log(colOne);

    //console.log(colOne[5].children[0].classList.contains("inactive"));

    for (let i = colFive.length - 1; i >= 0; i--) {
        if (colFive[i].children[0].classList.contains("inactive")) {
            colFive[i].children[0].classList.remove("inactive");
            if (turn % 2 == 0) {
                colFive[i].children[0].classList.add("player-one-color");
                colFive[i].children[0].classList.add("active");
                arrBoard[4].push("1");
                turn++;
            }
            else {
                colFive[i].children[0].classList.add("player-two-color");
                colFive[i].children[0].classList.add("active");
                arrBoard[4].push("2");
                turn++;
            }
            
            checkWinner(arrBoard);
            break;
        }
    }

}
function fillColumnSix(event) {
    const colSix = document.querySelectorAll(".col-six");
    //console.log(colOne);

    //console.log(colOne[5].children[0].classList.contains("inactive"));

    for (let i = colSix.length - 1; i >= 0; i--) {
        if (colSix[i].children[0].classList.contains("inactive")) {
            colSix[i].children[0].classList.remove("inactive");
            if (turn % 2 == 0) {
                colSix[i].children[0].classList.add("player-one-color");
                colSix[i].children[0].classList.add("active");
                arrBoard[5].push("1");
                turn++;
            }
            else {
                colSix[i].children[0].classList.add("player-two-color");
                colSix[i].children[0].classList.add("active");
                arrBoard[5].push("2");
                turn++;
            }
           
            checkWinner(arrBoard);
            break;
        }
    }

}
function fillColumnSeven(event) {
    const colSeven = document.querySelectorAll(".col-seven");
    //console.log(colOne);

    //console.log(colOne[5].children[0].classList.contains("inactive"));

    for (let i = colSeven.length - 1; i >= 0; i--) {
        if (colSeven[i].children[0].classList.contains("inactive")) {
            colSeven[i].children[0].classList.remove("inactive");
            if (turn % 2 == 0) {
                colSeven[i].children[0].classList.add("player-one-color");
                colSeven[i].children[0].classList.add("active");
                arrBoard[6].push("1");
                turn++;
            }
            else {
                colSeven[i].children[0].classList.add("player-two-color");
                colSeven[i].children[0].classList.add("active");
                arrBoard[6].push("2");
                turn++;
            }
           
            checkWinner(arrBoard);
            break;
        }
    }

}

function checkWinner(arr) {
    checkDown(arr);
    checkOrizontal(arr);
    checkUpperDiagR(arr);
    checkUpperDiagL(arr);
    // checkLowerDiagR(arr);
    // checkLowerDiagL(arr);
}

function checkDown(arr) {

    for (let j = 0; j < arr.length - 1; j++) {
        let counter_p1 = 1;
        let counter_p2 = 1;
        for (let i = arr[j].length - 1; i >= 0; i--) {
            if (arr[j][i] == 1 && arr[j][i - 1] == 1) {
                counter_p1++;
            }
            if (arr[j][i] == 2 && arr[j][i - 1] == 2) {
                counter_p2++;
            }
            if (arr[j][i] == 1 && arr[j][i - 1] == 2) {
                counter_p1 = 1;
            }
            if (arr[j][i] == 2 && arr[j][i - 1] == 1) {
                counter_p2 = 1;
            }
            // console.log(counter_p1);
            // console.log(counter_p2);
            if (counter_p1 == 4 || counter_p2 == 4) {
                console.log("Win column!")
                break;
            }
        }
    }

}

function checkOrizontal(arr){
    for(let i = 0; i<4;i++){
        for(let j = 0; j<arr[i].length; j++){
            if(arr[i][j] == arr[i+1][j] &&
                arr[i+1][j] == arr[i+2][j] &&
                arr[i+2][j] == arr[i+3][j]){
                    console.log("Win row!")
                }
        }
    }
}

function checkUpperDiagR(arr){
    for(let i = 0; i<4;i++){
        for(let j = 0; j<arr[i].length; j++){
            if(arr[i][j] == arr[i+1][j+1] &&
                arr[i+1][j+1] == arr[i+2][j+2] &&
                arr[i+2][j+2] == arr[i+3][j+3]){
                    console.log("Win diag!")
                }
        }
    }
}

function checkUpperDiagL(arr){
    for(let i = 6; i>2;i--){
        for(let j = 0; j<arr[i].length; j++){
            if(arr[i][j] == arr[i-1][j+1] &&
                arr[i-1][j+1] == arr[i-2][j+2] &&
                arr[i-2][j+2] == arr[i-3][j+3]){
                    console.log("Win diag!")
                }
        }
    }
}

// function checkLowerDiagR(arr){
//     for(let i = 0; i<4;i++){
//         for(let j = arr[i].length; j>=3; j--){
//             if(arr[i][j-1] == arr[i+1][j-2] &&
//                 arr[i+1][j-2] == arr[i+2][j-3] &&
//                 arr[i+2][j-3] == arr[i+3][j-4]){
//                     console.log("Win LR diag!")
//                 }
//         }
//     }

// }



// function checkOrizontal(arr, column = 0,count_p1 = 1,count_p2 = 1){
    
//     if( column > 6) return;
//     for(let i = 0; i<arr[column].length;i++){
//         if(count_p1 == 4) console.log("p1 row win");
//         if(count_p2 == 4) console.log("p2 row win");
//         if( arr[column][i] == 1 &&
//             arr[column+1][i] == 1){
//                 count_p1++;
//                 column++;
//                 checkOrizontal(arr,column,count_p1,count_p2);
//             }
//         if( arr[column][i] == 2 &&
//             arr[column+1][i] == 2){
//                 count_p2++;
//                 column++;
//                 checkOrizontal(arr,column,count_p1,count_p2);
//             }
        
//             if( arr[column][i] == 2 &&
//                 arr[column+1][i] == 1 ||
//                 arr[column][i] == 1 &&
//                 arr[column+1][i] == 2){
//                     count_p1 = 1;
//                     count_p2 = 1;
//                     checkOrizontal(arr,column,count_p1,count_p2);
//                 }

//     }

// }







// function checkOrizontal(arr, columns = 0, count_p1 = 1, count_p2 = 1) {
    
    
//     for (let i=0; i<arr.length; i++){
//         if(arr[columns][i] == 1 &&
//             arr[columns + 1][i] == 1 
//             ){
//                 count_p1++;
//                 columns++;
//                 if(count_p1 == 4 || count_p2 == 4) console.log("win row")
//                 checkOrizontal(arr,columns,count_p1,count_p2);
//             }
//         if(arr[columns][i] == 2 &&
//             arr[columns + 1][i] == 2 
//             ){
//                 columns++;
//                 count_p2++;
//                 if(count_p1 == 4 || count_p2 == 4) console.log("win row")
//                 checkOrizontal(arr,columns,count_p1,count_p2);
//             }
//         if(arr[columns][i] == 2 &&
//             arr[columns + 1][i] == 1 ||
//             arr[columns][i] == 1 &&
//             arr[columns + 1][i] == 2 ||
//             arr[columns + 1][i] == undefined){
//                 columns++;
//                 count_p1 = 1;
//                 count_p2 = 1;
//                 checkOrizontal(arr,columns,count_p1,count_p2);

//             }

//     }
// }

