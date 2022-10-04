'use strict'
let input = document.getElementById('input');
let list = document.querySelectorAll('.elem');
let operationList = document.querySelectorAll('.symbol');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn0 = document.getElementById('btn0');
const btnPlus = document.getElementById('btnPlus');
const btnEq = document.getElementById('btnEq');
const btnMinus = document.getElementById('btnMinus');
const btnDel = document.getElementById('btnDel');
const btnUm = document.getElementById('btnUm');
console.log(btn1.textContent)
function operate(){
    input.value += String(this.textContent);
}
function button(){
    input.value += this.textContent;
}
for (let elem of list){
    elem.addEventListener('click', button);
}
for (let elem of operationList){
    elem.addEventListener('click', operate);
}
btnEq.addEventListener('click', function(){
    let res = input.value;
    input.value = +res;
})