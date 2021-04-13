
if(screen.height < 650){
    alert("Please rotate your device");
}

function cleared() {
    document.getElementById('input').innerHTML = '';
}

function backspace() {
    let input = document.getElementById('input').innerHTML;
    let len = input.length;
    let x = input.substr(0, len-1)
    document.getElementById('input').innerHTML = x;
}

function addOne() {
    let input = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = input + '1';
}
function addTwo() {
    let input = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = input + '2';
}
function addThree() {
    let input = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = input + '3';
}
function addFour() {
    let input = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = input + '4';
}
function addFive() {
    let input = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = input + '5';
}
function addSix() {
    let input = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = input + '6';
}
function addSeven() {
    let input = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = input + '7';
}
function addEight() {
    let input = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = input + '8';
}
function addNine() {
    let input = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = input + '9';
}
function addZero() {
    let input = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = input + '0';
}
function addDecimal() {
    let input = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = input + '.';
}
function add() {
    let input = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = input + '+';
}
function minus() {
    let input = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = input + '-';
}
function multiply() {
    let input = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = input + '*';
}
function divide() {
    let input = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = input + '/';
}

function result() {
    let input = document.getElementById('input').innerHTML;
    let z = eval(input);
    document.getElementById('input').innerHTML = z;
}