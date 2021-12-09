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
let darkenButton = document.querySelector('.darkenButton');
let lightenButton = document.querySelector('.lightenButton');
let colorMode = blackMode;
let overlayMode = resetOverlay;
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
    colorMode = rainbowMode;
    overlayMode = resetOverlay;
});
blackButton.addEventListener('click', function black(){
    colorMode = blackMode;
    overlayMode = resetOverlay;
});
eraserButton.addEventListener('click', function eraser(){
    colorMode = eraserMode;
    overlayMode = resetOverlay;
});
warmButton.addEventListener('click', function warm(){
    colorMode = warmMode;
    overlayMode = resetOverlay;
});
coolButton.addEventListener('click', function cool(){
    colorMode = coolMode;
    overlayMode = resetOverlay;
});
breezeButton.addEventListener('click', function breeze(){
    colorMode = breezeMode;
    overlayMode = resetOverlay;
});
darkenButton.addEventListener('click', function darken(){
    overlayMode = darkenMode;
})
lightenButton.addEventListener('click', function darken(){
    overlayMode = lightenMode;
})

// change color of grid when hovered over
function hover(){
    for(let i = 0; i < square.length; i++){
        square[i].addEventListener('mouseover', function sketch(){
            if(overlayMode === darkenMode){
                overlayMode(square[i]);
            }
            else if(overlayMode === lightenMode){
                overlayMode(square[i]);
            }
            else{
                colorMode(square[i]);
                overlayMode(square[i]);
            }
        });
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
function rainbowMode(element){
    let randomNum = Math.floor(Math.random() * 7);
    if (randomNum === 0){
        element.style.backgroundColor = 'rgb(255, 0, 0)';
    }
    else if (randomNum === 1){
        element.style.backgroundColor = 'rgb(255, 166, 0)';
    }
    else if (randomNum === 2){
        element.style.backgroundColor = 'rgb(255, 255, 0)';
    }
    else if (randomNum === 3){
        element.style.backgroundColor = 'rgb(0, 129, 0)';
    }
    else if (randomNum === 4){
        element.style.backgroundColor = 'rgb(0, 0, 255)';
    }
    else if (randomNum === 5){
        element.style.backgroundColor = 'rgb(75, 0, 130)';
    }
    else if (randomNum === 6){
        element.style.backgroundColor = 'rgb(238, 130, 238)';
    }
    element.style.borderColor = 'grey';
};
function breezeMode(element){
    let randomNum = Math.floor(Math.random() * 4);
    if (randomNum === 0){
        element.style.backgroundColor = '#32502E';
    }
    else if (randomNum === 1){
        element.style.backgroundColor = '#406343';
    }
    else if (randomNum === 2){
        element.style.backgroundColor = '#ECE7B4';
    }
    else if (randomNum === 3){
        element.style.backgroundColor = '#F3EFCC';
    }
    element.style.borderColor = 'grey';
};

function coolMode(element){
    let randomNum = Math.floor(Math.random() * 4);
    if (randomNum === 0){
        element.style.backgroundColor = '#22577E';
    }
    else if (randomNum === 1){
        element.style.backgroundColor = '#5584AC';
    }
    else if (randomNum === 2){
        element.style.backgroundColor = '#95D1CC';
    }
    else if (randomNum === 3){
        element.style.backgroundColor = '#F6F2D4';
    }
    element.style.borderColor = 'grey';
};
function warmMode(element){
    let randomNum = Math.floor(Math.random() * 4);
    if (randomNum === 0){
        element.style.backgroundColor = '#E02401';
    }
    else if (randomNum === 1){
        element.style.backgroundColor = '#F78812';
    }
    else if (randomNum === 2){
        element.style.backgroundColor = '#AB6D23';
    }
    else if (randomNum === 3){
        element.style.backgroundColor = '#51050F';
    }
    element.style.borderColor = 'grey';
};
function eraserMode(element){
    element.style.backgroundColor = 'white';
    element.style.borderColor = 'rgb(119, 118, 118)';
};
function blackMode(element){
    element.style.backgroundColor = 'black';
    element.style.borderColor = 'rgb(56, 199, 185)';
};

function resetOverlay(element){
        element.style.opacity = 1;
    
};
function darkenMode(element){
    box.style.backgroundColor = 'black';
    if(element.style.opacity){
        if(Number(element.style.opacity) > 0)
        element.style.opacity = Number(element.style.opacity) - .1;
        else if(Number(element.style.opacity) <= 0)
        return;
    }
    else{
        element.style.opacity = 1;
    }
};
function lightenMode(element){
    box.style.backgroundColor = 'white';
    if(element.style.opacity){
        if(Number(element.style.opacity) > 0)
        element.style.opacity = Number(element.style.opacity) - .1;
        else if(Number(element.style.opacity) <= 0)
        return;
    }
    else{
        element.style.opacity = 1;
    }
};
