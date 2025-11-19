$(document).ready(function () {
  // Load saved tasks from localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  renderTasks();

  // Add new task
  $("#addBtn").click(function () {
    const taskText = $("#taskInput").val().trim();
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
    tasks.push(taskText);
    saveTasks();
    $("#taskInput").val("");
    renderTasks();
  });

  // Press Enter to add
  $("#taskInput").keypress(function (e) {
    if (e.which === 13) $("#addBtn").click();
  });

  // Render list
  function renderTasks() {
    $("#taskList").empty();
    tasks.forEach((task, index) => {
      $("#taskList").append(`
        <li>
          <span class="task-text">${task}</span>
          <div class="actions">
            <button class="editBtn" data-index="${index}">Edit</button>
            <button class="deleteBtn" data-index="${index}">Delete</button>
          </div>
        </li>
      `);
    });
  }

  // Save to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Delete task
  $(document).on("click", ".deleteBtn", function () {
    const index = $(this).data("index");
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  });

  // Edit task
  $(document).on("click", ".editBtn", function () {
    const index = $(this).data("index");
    const currentText = tasks[index];
    const li = $(this).closest("li");

    li.html(`
      <input type="text" value="${currentText}" class="editInput">
      <div class="actions">
        <button class="saveBtn" data-index="${index}">Save</button>
        <button class="cancelBtn" data-index="${index}">Cancel</button>
      </div>
    `);
  });

  // Save edited task
  $(document).on("click", ".saveBtn", function () {
    const index = $(this).data("index");
    const newText = $(this).closest("li").find(".editInput").val().trim();
    if (newText === "") {
      alert("Task cannot be empty!");
      return;
    }
    tasks[index] = newText;
    saveTasks();
    renderTasks();
  });

  // Cancel edit
  $(document).on("click", ".cancelBtn", function () {
    renderTasks();
  });
});