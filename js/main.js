// count initial ToDo
countTodos();

// capture click event
document.getElementById('checkAll').addEventListener('click', function(){
    AllDone();
});

//capture enter key press
document.getElementById('todo-to-add').addEventListener('keypress',function (e) {
      if (e.which == 13) {
        e.preventDefault();
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

// Adding event listeners for each existing todo item checkbox
var todos = document.querySelectorAll('#sortable li input[type="checkbox"]');
for (var i = 0; i < todos.length; i++) {
    todos[i].addEventListener('change',function(){
        if(this.checked == true){
            var doneItem = this.parentElement.textContent.trim();
            console.log('done item: ' + doneItem);
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
    var toDos = document.querySelectorAll('#sortable li');
    var count = 0;
    for (var i = 0; i < toDos.length; i++) {
        if (!toDos[i].classList.contains('completed')) {
            count++;
        }
    }
    document.querySelector('.count-todos').textContent = count;
}

//create task (To Complete)
function createTodo(text){
    var toDo = document.createElement("li");
    toDo.classList.add("ui-state-default");
    toDo.textContent = text;

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("change", done);

    toDo.appendChild(checkBox);

    var element = document.getElementById("sortable");
    element.appendChild(toDo);
}

//mark task as done (To Complete)
function done(){
    var listItem = this.parentNode;
    listItem.classList.toggle('completed');
    countTodos();
}

//mark all tasks as done (To Complete)
function AllDone(){
    var todos = document.querySelectorAll('#sortable li');
    for (var i = 0; i < todos.length; i++) {
        todos[i].classList.add('completed');
    }
    countTodos();
}

//remove done task from list (To Complete)
function removeItem(element){
    var listItem = element.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
    countTodos();
}
