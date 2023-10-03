$(document).ready(function() {
    const todoForm = $("#todo-form");
    const taskInput = $("#task-input");
    const taskList = $("#task-list");

    todoForm.on("submit", function(e) {
        e.preventDefault();

        const taskText = taskInput.val().trim();

        const listItem = $("<li></li>");
        const span = $("<span></span>").text(taskText);
        listItem.append(span);

        const deleteButton = $("<button></button>").text("Excluir");
        deleteButton.addClass("delete-button");
        listItem.append(deleteButton);

        taskList.append(listItem);

        taskInput.val("");

        deleteButton.on("click", function() {
            listItem.remove();
        });

        span.on("click", function() {
            span.toggleClass("completed-task");
        });
    });
});
