
document.getElementById("convert").addEventListener("click", calculate)

function calculate () {
let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
let num3 = Number(document.getElementById("num3").value);

let total = (0.5) * (num1 + num2) * num3
document.getElementById("result") .innerHTML = total;
}