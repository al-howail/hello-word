

function calculate() {

const pound = document.getElementById("weight").value;

const kilograms = pound * 0.453592

document.getElementById("result").innerHTML= kilograms.toFixed(2) + "kg"


}

