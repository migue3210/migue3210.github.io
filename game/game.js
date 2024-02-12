let doctitle = document.title;

window.addEventListener("blur", () => {
    document.title = "Regresa 🤧";
})

window.addEventListener("focus", () => {
    document.title = doctitle;
})

const size3 = document.getElementById('3x3')
const size4 = document.getElementById('4x4')
const size5 = document.getElementById('5x5')
const randomSize = document.getElementById('random-size')

function generateSize() {
    return Math.floor(Math.random() * 3) + 3;
}

var boardSize = null;
localStorage.setItem("BoardSize", boardSize)
document.querySelectorAll(".click").forEach(element => {
    element.addEventListener("click", e => {
        const id = e.target.getAttribute("id");
        if (id == '3x3') {
            size3.className = 'circle-shape-target click';
            size4.className = "circle-shape click";
            size5.className = "circle-shape click";
            randomSize.className = "random click";
            boardSize = 3;
            localStorage.setItem("BoardSize", boardSize);


        } if (id == '4x4') {
            size3.className = 'circle-shape click';
            size4.className = "circle-shape-target click";
            size5.className = "circle-shape click";
            randomSize.className = "random click";
            boardSize = 4;
            localStorage.setItem("BoardSize", boardSize);



        } if (id == '5x5') {
            size3.className = 'circle-shape click';
            size4.className = "circle-shape click";
            size5.className = "circle-shape-target click";
            randomSize.className = "random click";
            boardSize = 5;
            localStorage.setItem("BoardSize", boardSize);



        } if ('random-size' == id) {
            size3.className = 'circle-shape click';
            size4.className = "circle-shape click";
            size5.className = "circle-shape click";
            randomSize.className = "random-target click";
            boardSize = generateSize();
            localStorage.setItem("BoardSize", boardSize);


        }
    });
});


var input1 = document.getElementById("player1");
var input2 = document.getElementById("player2");
var input3 = document.getElementById("player3");
var input4 = document.getElementById("player4");

let button = document.querySelector(".button");
let input = document.querySelector(".player");
button.disabled = true;
if (input) {
    input1.addEventListener("change", stateHandle);
    input2.addEventListener("change", stateHandle);
    input3.addEventListener("change", stateHandle);
    input4.addEventListener("change", stateHandle);
}

function stateHandle() {
    if ((input1.value && input2.value && input3.value && input4.value) === "" && boardSize === null) {
        button.disabled = true;
    } else {
        button.disabled = false;
        button.className = 'button ready';
    }
}

function SaveData() {
    var input1 = document.getElementById("player1").value;
    var input2 = document.getElementById("player2").value;
    var input3 = document.getElementById("player3").value;
    var input4 = document.getElementById("player4").value;
    localStorage.setItem("player1", input1);
    localStorage.setItem("player2", input2);
    localStorage.setItem("player3", input3);
    localStorage.setItem("player4", input4);
}


