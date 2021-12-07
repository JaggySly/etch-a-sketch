// Variables
let square = null;
const container = document.querySelector('container');
let n = 16;
let num = null;
// Create a grid
function grid(number){
    let container = document.querySelector('.container');
    for(let i = 0; i < number ** 2; i++){
        let div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
    square = document.querySelectorAll('.square');
    for(let j = 0; j < square.length; j++){
        num = 500 / number;
        let roundedStr = num.toFixed(4);
        let roundedNum = parseFloat(roundedStr);
        square[j].style.width = roundedNum + 'px';
        square[j].style.height = roundedNum + 'px';
    }
}
grid(n);

for(let i = 0; i < square.length; i++){
    square[i].addEventListener('mouseover', function sketch(){
        square[i].classList.add('sketch');
    })
}