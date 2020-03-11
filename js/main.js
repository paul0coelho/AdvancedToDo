
// count initial ToDo
countTodos();

// capture click event
document.getElementById('checkAll').addEventListener('click', function(){
    AllDone();
});

//capture enter key press
document.getElementById('todo-to-add').addEventListener('keypress',function (e) {
      e.preventDefault // Do not submit form
      if (e.which == 13) { // check if enter is pressed
        var todo = document.getElementById('todo-to-add').value;
        console.log(todo);
        addToDo(todo);
      }
});

// capture click event
document.getElementById('addTODO').addEventListener('click',function () {
    var todo = document.getElementById("todo-to-add").value;
    console.log(todo);
    addToDo(todo);
});


var todos = document.querySelectorAll('#sortable li input[type="checkbox"]');
for (var i = 0; i < todos.length; i++) {
    todos[i].addEventListener('change',function(){
        if(this.checked == true){
            var doneItem = this.parentElement.innerText
            // $(this).parent().parent().parent().addClass('remove');
            console.log('done item: ' +doneItem);
            done(doneItem);
            countTodos();
        }
    });
}

// capture click event on button minus on Already Done 
var already_done_elements = document.getElementsByClassName("remove-item");
for (var i = 0; i < already_done_elements.length; i++) {
    already_done_elements[i].addEventListener('click',function(){
        console.log(this);
        removeItem(this);
    });
}

// add new todo
function addToDo(todo){
    createTodo(todo); 
    countTodos();
}

// count tasks (To Complete)
function countTodos(){
  
}

//create task (To Complete)
function createTodo(text){
    
}

//mark task as done (To Complete)
function done(doneItem){
    
}

//mark all tasks as done (To Complete)
function AllDone(){
    
}

//remove done task from list (To Complete)
function removeItem(element){
    
}