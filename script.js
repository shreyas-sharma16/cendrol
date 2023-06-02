var counter = 0;
var button = document.getElementById('myButton');
var counterDisplay = document.getElementById('counter');
var colorCircle = document.getElementById('colorCircle');

button.addEventListener('click', function() {
    counter++;
    counterDisplay.innerText = 'Counter: ' + counter;
    colorCircle.style.backgroundColor = getComputedStyle(button).backgroundColor;
});

var button = document.getElementById('myButton');

button.addEventListener('click', function() {
    var randomColor = getRandomColor();
    button.style.backgroundColor = randomColor;
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var cendol = 2;
var cendolValue = document.getElementById('cendolValue');
var incrementButton = document.getElementById('incrementButton');

incrementButton.addEventListener('click', function() {
    cendol += 10;
    cendolValue.innerText = cendol;
});


var myButton2 = document.getElementById('myButton2');
var value = document.getElementById('value');
var myVariable = true;
updateButtonStyle();

myButton2.addEventListener('click', function() {
    myVariable = !myVariable;
    updateButtonStyle();
    updateVariableValue();
});

function updateButtonStyle() {
    myButton2.classList.remove('true', 'false');
    myButton2.classList.add(myVariable ? 'true' : 'false');
}

function updateVariableValue() {
    value.innerText = myVariable ? 'true' : 'false';
}