const calcTitle = document.getElementById("calcTitle");
calcTitle.append("Mi Calculadora");

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
};

function clearDisplay() {
    display.value = ""
};


function deleteLast() {
    if (display.value.lenght > 1) {
        display.value = display.value.slice(0, -1);
    }
    else {
        display.value = "0";
    }
};
function caclculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value("Error")
    }
};