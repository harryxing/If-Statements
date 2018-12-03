document.getElementById("check").addEventListener("click",checknum)
document.getElementById("check2").addEventListener("click",checknum2)



function checknum(){
    let num = document.getElementById("input").value

    if(num%5 == 0){
        document.getElementById("reslut").innerHTML = "A multiple of 5"
    }else{
        document.getElementById("reslut").innerHTML = "Not a multiple of 5"
    }
}

function checknum2(){
    let num2 = document.getElementById("input2").value

    if(num2%2 == 0){
        document.getElementById("reslut2").innerHTML = "A even number"
    }else{
        document.getElementById("reslut2").innerHTML = "Not a even number"
    }
}