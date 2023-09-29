document.addEventListener("DOMContentLoaded", function () {
    const todoForm = document.getElementById("todo-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    todoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const taskText = taskInput.value.trim();

        if (taskText === "") {
            return;
        }

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Excluir</button>
        `;

        taskList.appendChild(listItem);

        taskInput.value = "";

        
        const deleteButton = listItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });

        listItem.addEventListener("click", function() {
            listItem.classList.toggle("completed-task");
        })
    });
});