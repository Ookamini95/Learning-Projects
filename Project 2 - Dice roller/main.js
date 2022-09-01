

function rolldice(){
    var selects = document.getElementById("dadi");
    console.log(document.querySelector('#dadi'));
    console.log(document.getElementById("dadi"));
    var selectedValue = selects.value;
    var randomValue = Math.floor(Math.random()*selectedValue + 1);
    // let value = document.querySelector('#dadi').value;
    document.getElementById("result").innerHTML = randomValue;
}