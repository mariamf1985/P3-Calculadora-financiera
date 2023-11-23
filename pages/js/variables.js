/*AÑADIMOS LOS NODOS QUE SON INTERACTIVOS*/

/*Variables del display*/
const displayFirstValue = document.getElementById('firstValue');
const displayLastValue = document.getElementById('lastValue');

/*Variables de botones de números*/
const numberButtons = document.querySelectorAll('number');
const operatorButtons = document.querySelectorAll('number');

//Creamos el display 
const display = new Display(displayFirstValue, displayLastValue);

//Interacción de los botones para agregar el valor
numberButtons.forEach(button => {
    //cada vez que se hace click en un botón, el display agrega un número.
    button.addEventListener('click', () => {
        display.addNumber(button.innerHTML);
    });
});