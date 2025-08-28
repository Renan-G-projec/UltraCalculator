// Makes the default calculator be showed on the screen when the user press the default button
function set_default() {

}
// Basic Calculator functions
function insert(char) {
    let display = document.getElementById("result")
    if (display.innerText.length >= 15) {
        alert("[ERROR] More than 15 characters are not allowed")
    } else {
        display.innerText += char
    }
}
function evaluate() {
    let calc = document.getElementById("result")
    let operations = calc.innerText
    calc.innerText = eval(operations)
}

// For the Atom calculator:
function set_atom() {

}

// For the velocity one:
function set_velocity() {

}