function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskList = document.getElementById("tasks");
    const newTask = document.createElement("li");
    const taskContent = document.createElement("input");
    taskContent.value = taskText;
    taskContent.disabled = true;
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function () {
      taskContent.disabled = !taskContent.disabled;
      if (!taskContent.disabled) {
        taskContent.focus();
      }
    };
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      newTask.remove();
    };
    newTask.appendChild(taskContent);
    newTask.appendChild(editButton);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    taskInput.value = "";
  } else {
    alert("Molimo vas unesite zadatak!");
  }
}
// function removeTask() {
//   this.remove();
// }
// window.onload = function () {
//   const taskList = document.getElementById("tasks");
//   taskList.innerHTML
// };
