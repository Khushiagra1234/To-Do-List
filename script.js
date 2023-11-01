// Function to add a new task
function addTask() {
    const description = document.getElementById("task-description").value;
    const priority = document.getElementById("task-priority").value;
    const dueDate = document.getElementById("task-due-date").value;

    if (description.trim() !== "") {
        const taskList = document.getElementById("task-list");
        const li = document.createElement("li");
        li.innerHTML = `
    <input type="checkbox">
    <span>${description}</span>
    <span>Priority: ${priority}</span>
    <span>Due Date: ${dueDate}</span>
    <button onclick="deleteTask(this)">Delete</button>
`;
        taskList.appendChild(li);
        document.getElementById("task-description").value = "";
        alert("Task added successfully");
    } else {
        alert("Please enter a task description");
    }
}

// Function to delete a task
function deleteTask(deleteButton) {
    const taskList = document.getElementById("task-list");
    taskList.removeChild(deleteButton.parentElement);
    alert("Task deleted successfully");
}

// Event listener for the "Add Task" button
document.getElementById("task-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission
    addTask();
});


const deleteButtons = document.querySelectorAll("li button");
deleteButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        deleteTask(this);
    });
});