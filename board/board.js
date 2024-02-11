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
    div.id = `${24 + numbers2.indexOf(number)}`;
    div.textContent = `${number}`;
    container2.appendChild(div);
});

numbers3.forEach((number) => {
    const div = document.createElement('div');
    div.className = 'number';
    div.id = `${49 + numbers3.indexOf(number)}`;
    div.textContent = `${number}`;
    container3.appendChild(div);
});

numbers4.forEach((number) => {
    const div = document.createElement('div');
    div.className = 'number';
    div.id = `${74 + numbers4.indexOf(number)}`;
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
            numberVerify = document.getElementById(`${24 + numbers2.indexOf(verifyNumber[counter])}`);
            numberVerify.className = 'number-validate number';
        }
        if (numbers3.includes(verifyNumber[counter])) {
            numberVerify = document.getElementById(`${49 + numbers3.indexOf(verifyNumber[counter])}`);
            numberVerify.className = 'number-validate number';
        }
        if (numbers4.includes(verifyNumber[counter])) {
            numberVerify = document.getElementById(`${74 + numbers4.indexOf(verifyNumber[counter])}`);
            numberVerify.className = 'number-validate number';
        }
    }
    counter++;
}





