// Función para generar números aleatorios sin repetir
function generarNumerosAleatorios() {
    const listaNumeros = [];

    while (listaNumeros.length < 25) {
        const numeroAleatorio = Math.floor(Math.random() * 50) + 1;
        if (!listaNumeros.includes(numeroAleatorio)) {
            listaNumeros.push(numeroAleatorio);
        }
    }

    return listaNumeros;
}

// Obtener la lista de números aleatorios
const numerosAleatorios = generarNumerosAleatorios();

// Crear divs con la clase CSS repetida
const contenedorDivs = document.getElementById('number-list'); // Asegúrate de tener un elemento con el id "contenedor-divs"

numerosAleatorios.forEach((numero) => {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'number';
    nuevoDiv.textContent = `${numero}`;
    contenedorDivs.appendChild(nuevoDiv);
});