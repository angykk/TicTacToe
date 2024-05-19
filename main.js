
let cells = ["one", "two", "three", "four","five","six","seven","eight","nine"];
let clickedX = new Array(8);
let clickedO = new Array(8);
const winComb = [
    ["one","two","three"],
    ["one", "four", "seven"],
    ["two", "five", "eight"],
    ["three","six","nine"],
    ["four","five","six"],
    ["seven","eight","nine"],
    ["one","five","nine"],
    ["three","five","seven"],
];

let player = "X";

document.getElementById('board').addEventListener('click', function(event) {
    let arr;
    if(player === "X"){
        arr = clickedX;
    }
    else{
        arr = clickedO;
    }
      if(cells.includes(event.target.id) && !(arr.includes(event.target.id))){
        console.log('The element that was clicked was ',event.target.id);
        clickedCell(event.target.id);
      }
}); 

function clickedCell(cell){
    if(player === "X"){
        clickedX.push(cell);
    }
    else{
        clickedO.push(cell);
    }
    // clicked.forEach(function(cellclicked){
    //     console.log(cellclicked);
    // });
    
    let displayCell = document.getElementById(cell);
    let text = document.createElement("div");
    text.classList.add("XO");
    text.appendChild(document.createTextNode(player));
    displayCell.appendChild(text);
    
    ifWon();
    switchPlayer();

}

function switchPlayer(){
    if(player === "X"){
        player = "O";
    }
    else{
        player = "X";
    }
}

function ifWon(){
    let arr;
    if(player === "X"){
        arr = clickedX;
    }
    else{
        arr = clickedO
    }
    for(let x = 0; x < winComb.length; x ++){
        let ifWon = false;
        for(let y = 0; y < winComb[x].length; y++){
            if(!(arr.includes(winComb[x][y]))){
                ifWon = false;
                break;
            }
            ifWon = true;
        }

        if(ifWon){
            let board = document.getElementById("board");
            let text = document.createElement("div");
            text.classList.add("winMessage");
            text.appendChild(document.createTextNode(player + " wins!"));
            board.appendChild(text);
            break;

        }
    }
}

    
