const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
//event is first argument of function
//JS gives us event that has information about what happened while submitting
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    console.log(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
