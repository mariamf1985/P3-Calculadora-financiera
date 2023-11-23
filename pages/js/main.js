//llamamos a la pantalla
const display = document.querySelector(".display");

//llamamos a los botones
const buttons = document.querySelectorAll(".btn");

//para que funcionen los botones al hacer click
buttons.forEach(button => {
    button.addEventListener("click", () => {
        //para que aparezca lo que pulsamos en la pantalla
        const pressedButton = button.textContent;
        if (button.id === "C") {         //para que al pulsar "C" vuelva a "0".
            display.textContent = "0";
            return; //termina la función ejecutada.
        }
        if (button.id === "delete") {      //para borrar números de uno en uno con la flecha
            if (display.textContent.length === 1) {
                display.textContent = "0";
            } else {
                display.textContent = display.textContent.slice(0, -1);
            }
            return;
        }

        if (display.textContent === "0") {     //para que se quite el "0" al introducir números
            display.textContent = pressedButton;
        } else {
            display.textContent += pressedButton;
        }
    })

})
