
document.getElementById("addbutton").addEventListener("click", calculate);



function calculate() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let total = n1 + n2
    document.getElementById("result").innerHTML = total;
}