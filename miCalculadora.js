const calcTitle = document.getElementById("calcTitle"); // Crear un titulo
calcTitle.append("Mi Calculadora"); // Asignarle el nombre

const display = document.getElementById("display"); // crear una variable a partir del Id de Html display, donde se muestra los numeros

function appendToDisplay(input) {
    display.value += input;
};

function clearDisplay() {
    display.value = ""
};


function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    }
    else {
        display.value = "";
    }
};
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
};

const footer_container = document.getElementById("footer_container");
footer_container.append("@ 2025 - German Gibbs");