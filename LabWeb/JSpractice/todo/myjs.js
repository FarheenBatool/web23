function doBindings(){
    var btnn = document.getElementById("btn")
    btnn.onclick=click 
}
window.onload = doBindings

function click(){
    var inp = document.getElementById("input")
    var list = document.getElementById("todos")
    list.innerHTML = list.innerHTML + "<li>"+inp.value+"</li>"
    // inp.addEventListener("keydown",function (event){
    //     if (event.key === "Enter"){
    //         inp.value=""
    //     } 
    // })
    inp.value=""
}
