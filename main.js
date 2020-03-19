const pinky = document.querySelector(".color-1");
const paleGoldenrod = document.querySelector(".color-2");
const yellowGreen = document.querySelector(".color-3");
const lightblue = document.querySelector(".color-4");
const white = document.querySelector(".color-5");

const coloredSquare = document.querySelectorAll(".square");

const currentColor = document.querySelector(".current-brush");





const clickPink = function(){
    currentColor.classList.remove(currentColor.classList[1]);
    currentColor.classList.add('color-1');

};
pinky.addEventListener('click', clickPink);

const clickPaleGold = function(){
    currentColor.classList.remove(currentColor.classList[1]);
    currentColor.classList.add('color-2');

};
paleGoldenrod.addEventListener('click', clickPaleGold)

const clickYellow = function(){
    currentColor.classList.remove(currentColor.classList[1]);
    currentColor.classList.add('color-3');

};
yellowGreen.addEventListener('click', clickYellow)


const ClickBlue = function(){
    currentColor.classList.remove(currentColor.classList[1]);
    currentColor.classList.add('color-4');
};
 lightblue.addEventListener('click', ClickBlue);

 const clickWhite = function(){

    currentColor.classList.remove(currentColor.classList[1]);
    currentColor.classList.add('color-5')
 }

 white.addEventListener('click', clickWhite);

 const clickColor = function(event){
    event.target.classList.remove(event.target.classList[1]);
    event.target.classList.add(currentColor.classList[1]);
}
for (const element of coloredSquare){
element.addEventListener('click',clickColor);
}

