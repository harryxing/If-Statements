let speed = Math.random() * 100


if(speed <= 60){
    console.log("NoTicket")
}else if(speed <= 80){
    console.log("SmallTicket")
}else if(speed >= 80){
    console.log("BigTicket")
}