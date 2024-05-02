


function AgeCalculator () {



let  myDate = document.getElementById("birthdate"). value;
let  today = new Date();
//console.log(today.getFullYear());

myDate = new Date(myDate);

//console.log(myDate.getFullYear());


const age = today.getFullYear() - myDate.getFullYear();
const m = today.getMonth() - myDate.getMonth();
const d = today.getDate() - myDate.getDate();

document.getElementById("result").innerHTML = "Your age is: " + age +  " years old.";

}

document.getElementById("calculate").addEventListener("click",AgeCalculator);