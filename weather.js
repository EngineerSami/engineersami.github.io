
var temps = document.querySelectorAll(".cur");

function alert_nameCity() {
    alert("Loading weather report...");
}

function rmv_cookie(element) {
    element.parentElement.remove();
}
{
function update(element) {
    if (element.value == "fahrenheit") {
        for (var i=0; i<temps.length; i++) {
            temps[i].innerText = ((parseInt(temps[i].innerText) * 2) + 32);
            console.log(temps[i].innerText);
        }
    } else if (element.value == "celcius") {
        for (var i=0; i<temps.length; i++) {
            temps[i].innerText = ((parseInt(temps[i].innerText) - 32) / 2);
            
            console.log(temps[i].innerText);
        }
    }
}
}
