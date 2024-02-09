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
    div.textContent = `${number}`;
    container.appendChild(div);
    if (number in verifyNumber) {
        div.className = 'number-validate number';
    }
});

numbers.forEach((number) => {

});