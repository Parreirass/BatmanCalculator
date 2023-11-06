display =""
memory = 0

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
    memory += parseFloat(display || 0); 
}

function subtractFromMemory() {
    memory -= parseFloat(display || 0); 
}

function readMemory() {
    display = memory.toString(); 
    document.getElementById("input").value = display;
}

function clearMemory() {
    memory = 0; 
}