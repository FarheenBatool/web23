let getID;
$(function(){
   $("#btn").on("click",add);
//    $(".delete").on("click",deleted)
   $(document).on("click", ".delete", deleted); //event delegation 
   //By using event delegation, you can bind the click event to dynamically generated elements that may not exist on the page when it is first loaded. This makes your code more flexible and resilient to changes in the page structure.
    $(document).on("click",".edit",update);
    $("#save").on("click",save);
    fetchData();
})


function deleted() {
   // console.log("Hi I am delete function")
    var btn = $(this) // reference of the button that is currently clicked
    let ID = btn.closest(".recipe")
    getID = ID.attr("id")
    $.ajax({
        url:"https://usman-fake-api.herokuapp.com/api/recipes/"+getID,
        method:"DELETE",
        success:fetchData,
    })
    console.log(getID)
}
function fetchData(){
    console.log("Binding done");
    $.ajax({
        url:"https://usman-fake-api.herokuapp.com/api/recipes",
        method:"GET",
     
        success: handleAjaxResponse,        
    })
    console.log("Api call done")
}

function handleAjaxResponse(response) {
    let recipes = $("#recipes");
    recipes.empty();
    for (let index = 0; index < response.length; index++) {
        var element = response[index];
        recipes.append(`<div class="recipe" id=${element._id}>
        <h4>${element.title}</h4><p>${element.body}</p>
        <button class=edit >Edit</button>
        <button class="delete">Delete</button>
        </div>`)
        
    }
    
    console.log(response)
}

function add(event){
    event.preventDefault(); //prevent default form submission behavior
    var title = $("#title").val();
    var body= $("#body").val();
    $.ajax({
        url:"https://usman-fake-api.herokuapp.com/api/recipes",
        method:"POST",
        data:{
            title,
            body,
        },
        success:function(response){
            console.log(response);
            fetchData();
            $("#title").val("");
            $("#body").val("");
        }
    })
    


}
function update(){
    console.log("Accessing")
    var btn = $(this) // reference of the button that is currently clicked
    let ID = btn.closest(".recipe")
    getID = ID.attr("id")
    $("#modalId").modal("show")  
    
}

function save(){
    var title = $("#titlee").val();
    var body = $("#bodyy").val();

    $.ajax({
        url:"https://usman-fake-api.herokuapp.com/api/recipes/"+getID,
        method:"PUT",
        data:{
            title,
            body,
        },
        success:function(response) {
            fetchData();
            $("#modalId").modal("hide")  
        }
    })
}