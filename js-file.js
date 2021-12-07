// Global Variables
let square = document.querySelectorAll('.square');
let box = document.querySelector('.box');
let n = 16;
let slider = document.querySelector('.mySlider');
let strValue = slider.value;
let numValue =  parseInt(strValue, 10);
let applyButton = document.querySelector('apply')
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
function rangeValue(){
    strValue = slider.value;
    let target = document.querySelector('.value');
    target.innerHTML = strValue + ' x ' + strValue;
    numValue =  parseInt(strValue, 10);
    
};
// function for the opening grid
function startGrid(){
    rangeValue();
    grid(numValue);
    for(let i = 0; i < square.length; i++){
        square[i].addEventListener('mouseover', function sketch(){
            square[i].classList.add('sketch');
        });
    }
};
slider.addEventListener('input', function changeGrid(){
    removeGrid(numValue);
    rangeValue();
    grid(numValue);
    for(let i = 0; i < square.length; i++){
        square[i].addEventListener('mouseover', function sketch(){
            square[i].classList.add('sketch');
        })
    }
});
//applyButton.addEventListener('click', function changeGrid(){
   // removeGrid(numValue);
    
//})

// change color of grid when hovered over
//for(let i = 0; i < square.length; i++){
//    square[i].addEventListener('mouseover', function sketch(){
//        square[i].classList.add('sketch');
//    })
//}
