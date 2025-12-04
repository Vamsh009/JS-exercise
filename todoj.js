const AddEvent = document.getElementById("add-button");
const InputEvent = document.getElementById("task-input");
const TodoList = document.getElementById("task-list");

AddEvent.addEventListener("click", addTask);

InputEvent.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
    const taskText = InputEvent.value.trim();
    if(taskText === ""){
        alert("Please enter a task.");
        return;
    }

    const listItem =document.createElement("li");
    listItem.classList.add("task-item");

    const taskSpan =  document.createElement("span");
    taskSpan.textContent = taskText;

    const deletebutton = document.createElement("button");
    deletebutton.textContent = "Delete";
    deletebutton.classList.add("delete-btn");

    deletebutton.addEventListener("click", function(){
        TodoList.removeChild(listItem);
    });

    taskSpan.addEventListener("click", function(){
        taskSpan.classList.toggle("completed");
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(deletebutton);
    TodoList.appendChild(listItem);
}