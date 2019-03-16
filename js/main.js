
// count initial ToDo
countTodos();

// capture click event
$("#checkAll").click(function(){
    AllDone();
});

//capture enter key press
$('.add-todo').on('keypress',function (e) {
      e.preventDefault // Do not submit form
      if (e.which == 13) { // check if enter is pressed
        var todo = $(".add-todo").val();
        addToDo(todo);
      }
});

// capture click event
$('#addTODO').on('click',function () {
    var todo = $(".add-todo").val();
    addToDo(todo);
});

// capute checkbox value change and transfer from ToDos to Already Done
$('.todolist').on('change','#sortable li input[type="checkbox"]',function(){
    if($(this).prop('checked')){
        var doneItem = $(this).parent().parent().find('label').text();
        $(this).parent().parent().parent().addClass('remove');
        done(doneItem);
        countTodos();
    }
});

// capture click event on button on Already Done
$('.todolist').on('click','.remove-item',function(){
    removeItem(this);
});

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