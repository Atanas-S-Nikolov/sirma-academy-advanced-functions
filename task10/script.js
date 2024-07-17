document.getElementById("add-button").addEventListener("click", function() {
    const input = document.getElementById("todo-input");
    const task = input.value.trim();
    const todoList = document.getElementById("todo-list");

    const listItem = document.createElement("li");
    listItem.textContent = task;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = (event) => {
        event.preventDefault();
        todoList.removeChild(listItem);
    } 

    listItem.appendChild(removeButton);
    todoList.appendChild(listItem);
    input.value = "";
});
