document.addEventListener("DOMContentLoaded", function () {
    const todoForm = document.getElementById("todo-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    todoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const taskText = taskInput.value.trim();

        const listItem = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = taskText;
        listItem.appendChild(span);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.classList.add("delete-button");
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        taskInput.value = "";

        deleteButton.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });

        span.addEventListener("click", function() {
            span.classList.toggle("completed-task");
        });
    });
});
