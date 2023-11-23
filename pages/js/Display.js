/*Aquí se controla la calculadora, los botones y lo que se ve en el display*/

class Display {
    //Para mostrar en el display
    constructor(displayFirstValue, displayLastValue) {
        //propiedades de la clase
        this.displayFirstValue = displayFirstValue;
        this.displayLastValue = displayLastValue;

        this.calculator = new Calculator();
        //números que estamos guardando pero no se muestran en el display. Usamos strings vacías.
        this.firstValue = '';
        this.lastValue = '';
    }
//Creamos métodos para agregar números a la calculadora.
    addNumber(number){
        //para que el número que agregamos sea igual al número que vemos.
        this.lastValue = number;
    }
}