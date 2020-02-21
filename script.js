var parentDiv = document.getElementById('wrapper');
var clickMe = document.getElementById('clickMe');

// Width that user inputs
var widthIn = document.getElementById('in1');

// Changes the available space for the pad to render
// Also used to calculate size of squares
var padWidth = 500; 

// Sets the size that the pad will render in
parentDiv.style.width = padWidth + 'px';


// Creates a listener that will let us know when 
// the button has been clicked
clickMe.addEventListener('click', sendAlert);

// Had to put this or else it would always fire when there
// hasn't even been a click
function sendAlert(){
    if (widthIn.value == ''){
        alert("Please Input a Valid Number!");
        return;
    }
    createGrid(widthIn.value);
}

// Creates the pad grid and adds squares
function createGrid(squareNumPerSide){

    // Clears the parentDiv to get rid of old pad
    parentDiv.innerHTML = '';

    for(i = 1; i <= squareNumPerSide; i++){
        var rowDiv = document.createElement('div');
    
        for (j = 1; j <= squareNumPerSide; j++){
            var columnDiv = document.createElement('div');
            
            defineSquare(columnDiv, i, j, squareNumPerSide);
            rowDiv.appendChild(columnDiv);
        }
        parentDiv.appendChild(rowDiv);
    }
   
}

// Defines the attributes and styles for the squares
function defineSquare(squareToDefine, row, col, squaresPerRow){
   
    squareToDefine.className = 'square';
    squareToDefine.style.width = '' + (padWidth / squaresPerRow) + 'px';
    squareToDefine.addEventListener('mouseenter', changeColor); 
                    
}

// Changes the color of the squares that the mouse has travelled over 
// to black 
function changeColor(e){
    e.target.style.backgroundColor = 'black';
}



