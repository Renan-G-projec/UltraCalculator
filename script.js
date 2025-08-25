const buttons = document.getElementsByClassName("change-type")
let main_area = document.getElementById("calc-are")

// Makes the default calculator be showed on the screen when the user press the default button
function set_default() {

}

// For the Atom calculator:
function set_atom() {

}

// For the velocity one:
function set_velocity() {
    main_area.style.borderRadius = "20px"
    main_area.style.backgroundColor = "white"
    main_area.style.height = "20px"
    main_area.style.width = "20px"
}