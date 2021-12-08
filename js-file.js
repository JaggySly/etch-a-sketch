// Global Variables
let square = null;
let box = document.querySelector('.box');
let n = 16;
let slider = document.querySelector('.mySlider');
let strValue = slider.value;
let numValue =  parseInt(strValue, 10);
let applyButton = document.querySelector('.apply');
let rainbowButton = document.querySelector('.rainbowButton');
let warmButton = document.querySelector('.warmButton');
let coolButton = document.querySelector('.coolButton');
let breezeButton = document.querySelector('.breezeButton');
let blackButton = document.querySelector('.blackButton');
let eraserButton = document.querySelector('.eraserButton');
let color = 'black';
let active = document.querySelector('.active');

// Create a grid function
function grid(number){
    box = document.querySelector('.box');
    for(let i = 0; i < number ** 2; i++){
        let div = document.createElement('div');
        div.classList.add('square');
        box.appendChild(div);
    }
    square = document.querySelectorAll('.square');
    let num = 500 / number;
    for(let j = 0; j < square.length; j++){
        let roundedStr = num.toFixed(4);
        let roundedNum = parseFloat(roundedStr);
        square[j].style.width = roundedNum + 'px';
        square[j].style.height = roundedNum + 'px';
    }
    return square;
};
// function that remove previous grid before adding new one 
function removeGrid(number){
    for(let i = 0; i < number ** 2; i++){
        let div = document.querySelector('div.square');
        div.remove();
    }
};
// makes the opening grid
startGrid();
// updates slider
function rangeValue(){
    strValue = slider.value;
    let target = document.querySelector('.value');
    target.innerHTML = strValue + 'x' + strValue + '';
    return strValue;
    
};
// function for the opening grid
function startGrid(){
    rangeValue();
    grid(numValue);
    hover();
};
// event listener to update slider value
slider.addEventListener('input', function changeGrid(){
    rangeValue();
});
// event listener to update grid when apply is clicked
applyButton.addEventListener('click', function changeGrid(){
    removeGrid(numValue);
    numValue =  parseInt(strValue, 10);
    grid(numValue);
    hover();
});
rainbowButton.addEventListener('click', function rainbow(){
    color = 'rainbow';
});
blackButton.addEventListener('click', function black(){
    color = 'black';
});
eraserButton.addEventListener('click', function eraser(){
    color = 'eraser';
});
warmButton.addEventListener('click', function warm(){
    color = 'warm';
});
coolButton.addEventListener('click', function cool(){
    color = 'cool';
});
breezeButton.addEventListener('click', function breeze(){
    color = 'breeze';
});

// change color of grid when hovered over
function hover(){
    for(let i = 0; i < square.length; i++){
        square[i].addEventListener('mouseover', function sketch(){
            if(color === 'black'){
                square[i].classList.remove('darkenSquare');
                square[i].style.backgroundColor = 'black';
                square[i].style.borderColor = 'rgb(56, 199, 185)';
                return;
            }
            else if(color === 'rainbow'){
                square[i].classList.remove('darkenSquare');
                let randomNum = Math.floor(Math.random() * 7);
                if (randomNum === 0){
                    square[i].style.backgroundColor = 'red';
                }
                else if (randomNum === 1){
                    square[i].style.backgroundColor = 'orange';
                }
                else if (randomNum === 2){
                    square[i].style.backgroundColor = 'yellow';
                }
                else if (randomNum === 3){
                    square[i].style.backgroundColor = 'green';
                }
                else if (randomNum === 4){
                    square[i].style.backgroundColor = 'blue';
                }
                else if (randomNum === 5){
                    square[i].style.backgroundColor = 'indigo';
                }
                else if (randomNum === 6){
                    square[i].style.backgroundColor = 'violet';
                }
            }
            else if(color === 'eraser'){
                square[i].classList.remove('darkenSquare');
                square[i].style.backgroundColor = 'white';
                square[i].style.borderColor = 'rgb(119, 118, 118)';
                return;
            }
            else if(color === 'warm'){
                square[i].classList.remove('darkenSquare');
                let randomNum = Math.floor(Math.random() * 4);
                if (randomNum === 0){
                    square[i].style.backgroundColor = '#E02401';
                }
                else if (randomNum === 1){
                    square[i].style.backgroundColor = '#F78812';
                }
                else if (randomNum === 2){
                    square[i].style.backgroundColor = '#AB6D23';
                }
                else if (randomNum === 3){
                    square[i].style.backgroundColor = '#51050F';
                }
            }
            else if(color === 'cool'){
                square[i].classList.remove('darkenSquare');
                let randomNum = Math.floor(Math.random() * 4);
                if (randomNum === 0){
                    square[i].style.backgroundColor = '#22577E';
                }
                else if (randomNum === 1){
                    square[i].style.backgroundColor = '#5584AC';
                }
                else if (randomNum === 2){
                    square[i].style.backgroundColor = '#95D1CC';
                }
                else if (randomNum === 3){
                    square[i].style.backgroundColor = '#F6F2D4';
                }
            }
            else if(color === 'breeze'){
                square[i].classList.remove('darkenSquare');
                let randomNum = Math.floor(Math.random() * 4);
                if (randomNum === 0){
                    square[i].style.backgroundColor = '#32502E';
                }
                else if (randomNum === 1){
                    square[i].style.backgroundColor = '#406343';
                }
                else if (randomNum === 2){
                    square[i].style.backgroundColor = '#ECE7B4';
                }
                else if (randomNum === 3){
                    square[i].style.backgroundColor = '#F3EFCC';
                }
            }
            square[i].style.borderColor = 'black';
        })
    }
};

let colorButton = document.querySelectorAll('.cbutton');


for(let i = 0; i < colorButton.length; i++){
    colorButton[i].addEventListener('click', function b(){
        if(active === 5){
            for(let j = 0; j < colorButton.length; j++){
                colorButton[j].classList.remove('active');
            }
        }
        colorButton[i].classList.add('active');
        active = 5;
    });
}
