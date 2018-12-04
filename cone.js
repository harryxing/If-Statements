//V=0.33*PI*R*R*h
//event listeners
document.getElementById("cal").addEventListener("click", calculate)



function calculate() {
    //input
    let radius = Number(document.getElementById("R").value);
    let height = Number(document.getElementById("H").value);
    //proces
    let total = 1 / 3 * Math.pow(radius, 2) * Math.PI * height;

    //output
    document.getElementById("result").innerHTML = total;
}