function randomNumber() {
    const numList = [];

    while (numList.length < 25) {
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        if (!numList.includes(randomNumber)) {
            numList.push(randomNumber);
        }
    }

    return numList;
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
    // if (number in verifyNumber) {
    //     div.className = 'number-validate number';
    // }
});


let counter = 0
number = document.getElementById("bingo-call-number");
function bingoCall() {
    if (counter < 25) {
        number.innerText = verifyNumber[counter];
        if (numbers.includes(verifyNumber[counter])) {
            numberVerify = document.getElementById(`${numbers.indexOf(verifyNumber[counter])}`);
            numberVerify.className = 'number-validate number';
        }
    }
    counter++;
    // console.log(counter)
}





