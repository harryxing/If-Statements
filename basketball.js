document.getElementById("shoot").addEventListener("click",shoot)


let swish = 0;
let made = 0;
let missed = 0;
let air = 0;

function shoot() {
    let ran = Math.random();
    if (ran <= 0.1) {
        document.getElementById("result").innerHTML = "Swish"
        swish++
        document.getElementById("Swish").innerHTML = swish
    } else if (ran <= 0.6) {
        document.getElementById("result").innerHTML = "Made a Shot(but not Swish)"
        made++
        document.getElementById("Made").innerHTML = made
    } else if (ran <= 0.95) {
        document.getElementById("result").innerHTML = "Missed(but not Air Ball)"
        missed++
        document.getElementById("Miss").innerHTML = missed
    } else {
        document.getElementById("result").innerHTML = "Air Ball"
        air++
        document.getElementById("Air").innerHTML = air
    }
}