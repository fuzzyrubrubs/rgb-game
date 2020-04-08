var mode = 6;
var colors = generateColor(mode);
var squares = document.querySelectorAll('.squares');
var selectedColor = document.querySelector('.selectedColour');
var winningNum = pickColor();
var messageDisplay = document.querySelector('.message');
var header = document.querySelector('header');
var resetBtn = document.querySelector('.btn-reset');
var btn = document.querySelectorAll('.btn');

selectedColor.textContent = winningNum;

resetBtn.addEventListener('click', function() {   
        reset(mode);
        resetBtn.textContent = "Reset";
        header.style.backgroundColor = "steelblue";
        messageDisplay.textContent = " ";
    
    
});

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        if (this.classList.contains('btn-easy')) {
            mode = 3;
            reset(mode);
            btn[0].classList.add('selected');
            btn[1].classList.remove('selected');
        } else if (this.classList.contains('btn-hard')) {
            mode = 6;
            reset(mode);
            btn[1].classList.add('selected');
            btn[0].classList.remove('selected');
        }
    })
}


function displaySquares(mode) {  
            for (var i = 0; i < squares.length; i++) {
              
                    if (colors[i]) {
                    squares[i].style.display = "block";
                    squares[i].style.backgroundColor = colors[i];
                        } else {
                    squares[i].style.display = "none";
                        }
                                         
                squares[i].addEventListener('click', function() {
                var pickedColor = this.style.backgroundColor;

                if (pickedColor === winningNum) {
                    messageDisplay.textContent = "Correct"
                    changeColor(winningNum);
                    header.style.backgroundColor = winningNum;
                    resetBtn.textContent = "Play again?"
                } else {
                    this.style.backgroundColor = "#232323";
                    messageDisplay.textContent = "Try again"
                }
            });
    }
}       

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
};

function generateColor(num) {
    var arr = []   
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }   
    return arr;
}

function randomColor() {   
    var red = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)   
    return "rgb(" + red + ', ' + green + ', ' + blue + ")"; 
}

function reset(mode) {
        colors = generateColor(mode); 
        winningNum = pickColor();
        selectedColor.textContent = winningNum;
        displaySquares(mode); 
}

reset(mode);




