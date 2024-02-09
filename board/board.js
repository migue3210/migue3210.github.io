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

const numbers = randomNumber();

const container = document.getElementById('number-list');

numbers.forEach((number) => {
    const div = document.createElement('div');
    div.className = 'number';
    div.textContent = `${number}`;
    container.appendChild(div);
});