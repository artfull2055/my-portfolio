
var yearSpot = document.getElementById("year");
if (yearSpot) {
    yearSpot.innerHTML = new Date().getFullYear();
}


function changeBg(color) {
    document.body.style.background = color;
}

function handleForm(event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var msg  = document.getElementById("message").value.trim();
    var output = document.getElementById("responseArea");

    if (name === "" || msg === "") {
        output.innerHTML = "Please fill all boxes!";
        output.style.color = "red";
    } else {
        output.innerHTML = "Thanks " + name + "! Your message was received.";
        output.style.color = "green";
    }

    return false;
}


