let doctitle = document.title;

window.addEventListener("blur", () => {
    document.title = "Regresa 🤧";
})

window.addEventListener("focus", () => {
    document.title = doctitle;
})

// gets or generates the board size

const size = localStorage.getItem("BoardSize");

// creates a list of random numbers
function randomNumber(variable) {
    const numList = [];

    if (variable == "number") {
        while (numList.length < size * size) {
            const randomNumber = Math.floor(Math.random() * 50) + 1;
            if (!numList.includes(randomNumber)) {
                numList.push(randomNumber);
            }
        }
    } else if (variable == "verify") {
        while (numList.length < 25) {
            const randomNumber = Math.floor(Math.random() * 50) + 1;
            if (!numList.includes(randomNumber)) {
                numList.push(randomNumber);
            }
        }
    }
    return numList;
}

// resizes the board
if (size == 5) {
    document.getElementById('number-list1').className = 'number-list-5';
    document.getElementById('number-list2').className = 'number-list-5';
    document.getElementById('number-list3').className = 'number-list-5';
    document.getElementById('number-list4').className = 'number-list-5';
} else if (size == 4) {
    document.getElementById('number-list1').className = 'number-list-4';
    document.getElementById('number-list2').className = 'number-list-4';
    document.getElementById('number-list3').className = 'number-list-4';
    document.getElementById('number-list4').className = 'number-list-4';
} else if (size == 3) {
    document.getElementById('number-list1').className = 'number-list-3';
    document.getElementById('number-list2').className = 'number-list-3';
    document.getElementById('number-list3').className = 'number-list-3';
    document.getElementById('number-list4').className = 'number-list-3';
}



const verifyNumber = randomNumber("verify");
const numbers1 = randomNumber("number");
const numbers2 = randomNumber("number");
const numbers3 = randomNumber("number");
const numbers4 = randomNumber("number");
const container1 = document.getElementById(`number-list1`);
const container2 = document.getElementById(`number-list2`);
const container3 = document.getElementById(`number-list3`);
const container4 = document.getElementById(`number-list4`);


// put the numbers of the list in the html and adds styling
numbers1.forEach((number) => {
    const div = document.createElement('div');
    div.className = 'number';
    div.id = `${numbers1.indexOf(number)}`;
    div.textContent = `${number}`;
    container1.appendChild(div);
});

numbers2.forEach((number) => {
    const div = document.createElement('div');
    div.className = 'number';
    div.id = `${25 + numbers2.indexOf(number)}`;
    div.textContent = `${number}`;
    container2.appendChild(div);
});

numbers3.forEach((number) => {
    const div = document.createElement('div');
    div.className = 'number';
    div.id = `${50 + numbers3.indexOf(number)}`;
    div.textContent = `${number}`;
    container3.appendChild(div);
});

numbers4.forEach((number) => {
    const div = document.createElement('div');
    div.className = 'number';
    div.id = `${75 + numbers4.indexOf(number)}`;
    div.textContent = `${number}`;
    container4.appendChild(div);
});

// adds text into html
let counter = 0
number = document.getElementById("bingo-call-number");
turn = document.getElementById("turns");
turn.innerText = counter;
number.innerText = 0;

// changes color of the number if it is correct and adds to the counter
function bingoCall() {
    if (counter < verifyNumber.length) {
        turn.innerText = counter + 1;
        number.innerText = verifyNumber[counter];
        if (numbers1.includes(verifyNumber[counter])) {
            numberVerify = document.getElementById(`${numbers1.indexOf(verifyNumber[counter])}`);
            numberVerify.className = 'number-validate number';
        }
        if (numbers2.includes(verifyNumber[counter])) {
            numberVerify = document.getElementById(`${25 + numbers2.indexOf(verifyNumber[counter])}`);
            numberVerify.className = 'number-validate number';
        }
        if (numbers3.includes(verifyNumber[counter])) {
            numberVerify = document.getElementById(`${50 + numbers3.indexOf(verifyNumber[counter])}`);
            numberVerify.className = 'number-validate number';
        }
        if (numbers4.includes(verifyNumber[counter])) {
            numberVerify = document.getElementById(`${75 + numbers4.indexOf(verifyNumber[counter])}`);
            numberVerify.className = 'number-validate number';
        }
    }
    counter++;
}


const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
option1.innerText = localStorage.getItem('player1');
option2.innerText = localStorage.getItem('player2');
option3.innerText = localStorage.getItem('player3');
option4.innerText = localStorage.getItem('player4');

function display() {
    var getSelectValue = document.getElementById("player-list").value;

    if (getSelectValue == option1.innerText) {
        document.getElementById('card1').style.display = "flex";
        document.getElementById('card2').style.display = 'none';
        document.getElementById('card3').style.display = 'none';
        document.getElementById('card4').style.display = 'none';
    } else if (getSelectValue == option2.innerText) {
        document.getElementById('card2').style.display = 'flex';
        document.getElementById('card1').style.display = 'none';
        document.getElementById('card3').style.display = 'none';
        document.getElementById('card4').style.display = 'none';
    } else if (getSelectValue == option3.innerText) {
        document.getElementById('card3').style.display = "flex";
        document.getElementById('card1').style.display = 'none';
        document.getElementById('card2').style.display = 'none';
        document.getElementById('card4').style.display = 'none';
    } else if (getSelectValue == option4.innerText) {
        document.getElementById('card4').style.display = "flex";
        document.getElementById('card1').style.display = 'none';
        document.getElementById('card3').style.display = 'none';
        document.getElementById('card2').style.display = 'none';
    }

}



const player1 = document.getElementById('player1');
player1.innerText = localStorage.getItem('player1');
const player2 = document.getElementById('player2');
player2.innerText = localStorage.getItem('player2');
const player3 = document.getElementById('player3');
player3.innerText = localStorage.getItem('player3');
const player4 = document.getElementById('player4');
player4.innerText = localStorage.getItem('player4');



function getDiagonal() {
    const n = 0;
    for (let index = 0; index < array.length; 0) {
        const element = array[index];

    }

}
