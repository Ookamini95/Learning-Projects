screen = document.querySelector(".screen");
let numArray = [];
let screenNum = "";
let tempNum;
let sumInput = false;
let multInput = false;
// console.log(buttons[0].value);
// console.log(screen);

function writeOnScreen(event){
    // console.log(event.target.value);
    // numArray.push(event.target.value);
    // console.log(numArray);
    
    screenNum += event.target.value;
    // console.log(screenNum);
    screen.innerText = parseInt(screenNum);
    
    tempNum = parseInt(screenNum);
    
}



function resetScreen(){
    screenNum = "";
    screen.innerText = "0";
    numArray.push(tempNum);
    console.log(numArray);
}

function sumNum(event){
    resetScreen();
    writeOnScreen(event);
    sumInput = true;
}

function multNum(event){
    resetScreen();
    writeOnScreen(event);
    multInput = true;
}

function result(){
    resetScreen();
    if(sumInput){
        screen.innerText = (numArray[0]+numArray[1]);
        numArray = [];
        sumInput = false;
    } 
    if(multInput){
        screen.innerText = (numArray[0]*numArray[1]);
        numArray = [];
        multInput = false;
    } 
}

