$(document).ready(function () {
  $("#addBtn").click(function () {
    const task = $("#taskInput").val().trim();

    if (task === "") return;

    const listItem = `
      <li>
        <span>${task}</span>
        <button class="remove">X</button>
      </li>`;

    $("#taskList").append(listItem);
    $("#taskInput").val("");
  });

  // event delegation for dynamically added delete buttons
  $("#taskList").on("click", ".remove", function () {
    $(this).parent().remove();
  });
});