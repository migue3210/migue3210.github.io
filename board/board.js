// gets or generates the board size
function generateSize() {
    return Math.floor(Math.random() * 3) + 3;
}
const size = generateSize();

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
    document.getElementById('number-list').className = 'number-list-5';
} else if (size == 4) {
    document.getElementById('number-list').className = 'number-list-4';
} else if (size == 3) {
    document.getElementById('number-list').className = 'number-list-3';
}



const verifyNumber = randomNumber("verify");
const numbers = randomNumber("number");
const container = document.getElementById('number-list');

// put the numbers of the list in the html and adds styling
numbers.forEach((number) => {
    const div = document.createElement('div');
    div.className = 'number';
    div.id = `${numbers.indexOf(number)}`;
    div.textContent = `${number}`;
    container.appendChild(div);
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
        if (numbers.includes(verifyNumber[counter])) {
            numberVerify = document.getElementById(`${numbers.indexOf(verifyNumber[counter])}`);
            numberVerify.className = 'number-validate number';
        }
    }
    counter++;
}





