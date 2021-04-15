
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
    let len = input.length;
    let char = input.charAt(len-1);
    let input1 = input.substr(0, len-1);
    if(char == '-' || char == '*' || char == '/'){
        document.getElementById('input').innerHTML = input.replace(input , input1 + '+') ;  
    }
    else{
        document.getElementById('input').innerHTML = input + '+';
    }
}
function minus() {
    let input = document.getElementById('input').innerHTML;
    let len = input.length;
    let char = input.charAt(len-1);
    let input1 = input.substr(0, len-1);
    if(char == '+' || char == '*' || char == '/'){
        document.getElementById('input').innerHTML = input.replace(input , input1 + '-') ;  
    }
    else{
        document.getElementById('input').innerHTML = input + '-';
    }
}
function multiply() {
    let input = document.getElementById('input').innerHTML;
    let len = input.length;
    let char = input.charAt(len-1);
    let input1 = input.substr(0, len-1);
    if(char == '-' || char == '+' || char == '/'){
        document.getElementById('input').innerHTML = input.replace(input , input1 + '*') ;  
    }
    else{
        document.getElementById('input').innerHTML = input + '*';
    }
}
function divide() {
    let input = document.getElementById('input').innerHTML;
    let len = input.length;
    let char = input.charAt(len-1);
    let input1 = input.substr(0, len-1);
    if(char == '-' || char == '*' || char == '+'){
        document.getElementById('input').innerHTML = input.replace(input , input1 + '/') ;  
    }
    else{
        document.getElementById('input').innerHTML = input + '/';
    }
}

function result() {
    let input = document.getElementById('input').innerHTML;
    let z = eval(input);
    let round = Math.round(z*1000000000)/1000000000;
    document.getElementById('input').innerHTML = round;
}
