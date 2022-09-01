const buttonContainer = document.querySelector('.buttons');
colors = ["red","blue","green","black"];


// console.log('buttonContainer', buttonContainer);

buttonContainer.addEventListener('click', event => {
    // console.log(event.target.value);
    document.body.style.backgroundColor = randomColor();
})

function randomColor(){
    return colors[Math.floor(Math.random()*(colors.length-1))];
}