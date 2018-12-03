document.getElementById("wheel").addEventListener("click",spin)

function spin (event) {
    console.log(event)
    let random = Math.random();
    if(random < 0.5 ) {
        document.getElementById("prize").innerHTML += "<img src= 'Sorry-please-play-again.jpg'>"
    }else if(random < 0.7){
        document.getElementById("prize").innerHTML += "<img src= 'a-woman-holding-a-cup-of-coffee.jpg'>"
    }else if(random < 0.9){
        document.getElementById("prize").innerHTML += "<img src= '1200px-Glazed-Donut.jpg'>"
    }else if(random < 0.99){
        document.getElementById("prize").innerHTML += "<img src= 'freecoffee.jpg'>"
    }else if(random < 1){
        document.getElementById("prize").innerHTML += "<img src= 'downloadjpg'>"
    }
}