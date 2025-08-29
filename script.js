// Basic Calculator functions
function insert(char) {
    let display = document.getElementById("result")
    if (display.innerText.length >= 15) {
        alert("[ERROR] More than 15 characters are not allowed")
    } else {
        display.innerText += char
    }
}
function calculate() {
    const display = window.document.getElementById("result")
    try {
        display.innerText = eval(display.innerText)
    } catch {
        alert("[ERROR] Check your input and try again.")
    }
}
function clean() {
    const display = window.document.getElementById("result")
    display.innerText = ''
}
function erase() {
    const display = window.document.getElementById("result")
    display.innerText = display.innerText.slice(0, display.innerText.length-1)
}
