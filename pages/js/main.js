//llamamos a la pantalla
const display = document.querySelector(".display");

//llamamos a los botones
const buttons = document.querySelectorAll(".btn");

//para que funcionen los botones al hacer click
buttons.forEach(button => {
    button.addEventListener("click", () => {
        //para que aparezca lo que pulsamos en la pantalla
        const pressedButton = button.textContent;
        if (display.textContent === "0") {     //para que se quite el "0" al introducir números
            display.textContent = pressedButton;
        } else {
            display.textContent += pressedButton;
        }
    })

})
