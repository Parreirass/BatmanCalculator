display =""
memory = 0

document.addEventListener("keydown", function(event) {
    if (event.key >= 0 && event.key <= 9) {
        add(event.key);
    } else if (event.key === "+") {
        add('+');
    } else if (event.key === "-") {
        add('-');
    } else if (event.key === "*") {
        add('*');
    } else if (event.key === ":") {
        add('/');
    } else if (event.key === "Enter") {
        igual();
    } else if (event.key === "Backspace") {
        backspace();
    } else if (event.key === "w") {
        addToMemory();
    } else if (event.key === "e") {
        subtractFromMemory();
    } else if (event.key === "r") {
        readMemory();
    } else if (event.key === "c") {
        ac();
    } else if (event.key === "t") {
        clearMemory();
    }
    
});


function add(value) {
    display+=value;
    document.getElementById("input").value = display; 
}

function igual() {
    const resultado = eval(display);
    display = resultado;
    document.getElementById("input").value = display;
}

function ac() {
    display = "";
    document.getElementById("input").value = display;
}

function backspace() {
    display = display.slice(0,-1);
    document.getElementById("input").value = display;
}

function batman(value) {
    display+=value;
    document.getElementById("input").value = display; 
    setTimeout(ac, 1000);
}

function addToMemory() {
    memory += parseFloat(display); 
}

function subtractFromMemory() {
    memory -= parseFloat(display); 
}

function readMemory() {
    display = memory.toString(); 
    document.getElementById("input").value = display;
}

function clearMemory() {
    memory = 0; 
}