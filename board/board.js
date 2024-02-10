function generateSize() {
    return Math.floor(Math.random() * 3) + 3;
}
const size = generateSize();
function randomNumber() {
    const numList = [];

    while (numList.length < size * size) {
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        if (!numList.includes(randomNumber)) {
            numList.push(randomNumber);
        }
    }

    return numList;
}

if (size == 5) {
    document.getElementById('number-list').className = 'number-list-5';
} else if (size == 4) {
    document.getElementById('number-list').className = 'number-list-4';
} else if (size == 3) {
    document.getElementById('number-list').className = 'number-list-3';
}



const verifyNumber = randomNumber();
const numbers = randomNumber();

const container = document.getElementById('number-list');

numbers.forEach((number) => {
    const div = document.createElement('div');
    div.className = 'number';
    div.id = `${numbers.indexOf(number)}`;
    div.textContent = `${number}`;
    container.appendChild(div);
});


let counter = 0
number = document.getElementById("bingo-call-number");
function bingoCall() {
    console.log(verifyNumber);
    if (counter < verifyNumber.length) {
        number.innerText = verifyNumber[counter];
        if (numbers.includes(verifyNumber[counter])) {
            numberVerify = document.getElementById(`${numbers.indexOf(verifyNumber[counter])}`);
            numberVerify.className = 'number-validate number';
        }
    }
    counter++;
}





