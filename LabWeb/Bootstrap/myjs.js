function btnHandle(){
    var input1 = document.getElementById("username");
    var input2 = document.getElementById("password");
    var  bool = false;
   
    if(input1.value===""){
        input1.classList.add("error");
        bool=false;
    }
    else{
        input1.classList.remove("error");
        bool = true;
    }
    if(input2.value===""){
        input2.classList.add("error");
        bool=false;
    }
    else{
        input2.classList.remove("error");
        bool=true;
    }
    if(bool===true){
        window.alert("Submission Sucessful");
    }
    
}