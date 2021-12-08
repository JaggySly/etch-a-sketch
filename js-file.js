// Global Variables
let square = null;
let box = document.querySelector('.box');
let n = 16;
let slider = document.querySelector('.mySlider');
let strValue = slider.value;
let numValue =  parseInt(strValue, 10);
let applyButton = document.querySelector('.apply');
let surrealButton = document.querySelector('.surrealButton');
let blackButton = document.querySelector('.blackButton');
let darkenButton = document.querySelector('.darkenButton');
let color = 'black';

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
    target.innerHTML = strValue + ' x ' + strValue;
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
surrealButton.addEventListener('click', function surreal(){
    color = 'surreal';
});
blackButton.addEventListener('click', function black(){
    color = 'black';
});
darkenButton.addEventListener('click', function darken(){
    color = 'darken';
});
// change color of grid when hovered over
function hover(){
    for(let i = 0; i < square.length; i++){
        square[i].addEventListener('mouseover', function sketch(){
            if(color === 'black'){
                square[i].classList.remove('darkenSquare');
                square[i].style.backgroundColor = 'black';
            }
            else if(color === 'surreal'){
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
            else if(color === 'darken'){
                square[i].classList.add('darkenSquare');
                let darkSquares = document.querySelectorAll('.darkenSquare');
                for(j = 0; j < darkSquares.length; j++)
                    //insert some code that will make squares darker here
            }
            
            square[i].style.borderColor = 'whitesmoke';
        })
    }
};
