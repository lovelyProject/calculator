'use strict'

const input = document.getElementById('input');
const numberList = document.querySelectorAll('.btn_number');
const clear = document.getElementById('clear');
const dot = document.getElementById('dot');
const minusPlus = document.getElementById('minus-plus');
const symbols = ['%','-','*','/','+'];
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const res = document.querySelector('.res');

res.addEventListener('click',()=>{
    const temp = input.textContent;
    input.textContent = eval(temp);
})

plus.addEventListener('click', ()=>{
    input.textContent += '+';
});

minus.addEventListener('click', ()=>{
    input.textContent += '-';
})

divide.addEventListener('click',function(){
    input.textContent += '/';
})


numberList.forEach(elem => {
    elem.addEventListener('click', function () {
        if (input.textContent == 0) {
            input.textContent = elem.textContent;
        } else {
            input.textContent += elem.textContent;
        }

    })
});

multiply.addEventListener('click',function(){
    input.textContent += '*';
})

clear.addEventListener('click', () => input.textContent = 0);

dot.addEventListener('click', function () {
    input.textContent += checkInput('.') ? '' : '.';
});

multiply
minusPlus.addEventListener('click', function () {
    const arr = input.textContent.split('');

    if (arr[0] == '-') {
        arr.shift();
        input.textContent = arr.join('');
    } else if (arr[0] != '-') {
        arr.unshift('-');

        input.textContent = arr.join('');
    }
})

function checkInput(symbol){
   return input.textContent.split('').find(item => item == symbol);
}