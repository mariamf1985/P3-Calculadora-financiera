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
            if (display.textContent.length === 1 || display.textContent === "Error!") {
                display.textContent = "0";
            } else {
                display.textContent = display.textContent.slice(0, -1);
            }
            return;
        }

        if (button.id === "equal") {  //para que al pusar "=" nos devuelva el resultado
            
            try {
            display.textContent = eval(display.textContent); //eval evalúa un conjunto de strings que tenga 
        } catch {                                           //operaciones matemáticas en una soa string sin formato nº.
            display.textContent = "Error!"; 
        }
            return;                                          
        }

        if (display.textContent === "0" || display.textContent === "Error!") {//para que se quite el "0" 
            display.textContent = pressedButton;                              //al introducir números
        } else {
            display.textContent += pressedButton;
        }
    })

})
