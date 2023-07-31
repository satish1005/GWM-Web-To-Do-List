function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      var li = document.createElement("li");
      li.innerHTML = `
        <span>${taskInput.value}</span>
        <button onclick="removeTask(this)">Delete</button>
      `;
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
  
  function removeTask(button){
    var taskList = document.getElementById("taskList");
    var li = button.parentElement;
    taskList.removeChild(li);
  }
  