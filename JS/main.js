var tasks = [];

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskName = taskInput.value;

  if (taskName == "") {
    alert("Please Enter Your Yask");
  } else {
    var task = {
      name: taskName,
      status: "not started",
    };

    tasks.push(task);
    taskInput.value = "";
    displayTasks();
  }
}



function displayTasks() {
  var allTasks = document.getElementById("allTasks");
  var ongoingTasks = document.getElementById("ongoingTasks");
  var finishedTasks = document.getElementById("finishedTasks");

  allTasks.innerHTML = "";
  ongoingTasks.innerHTML = "";
  finishedTasks.innerHTML = "";

  tasks.forEach(function (task, index) {
    if (task.status == "not started") {
      allTasks.innerHTML += `
                <div class="task">
                    <p>${task.name}</p>
                    <button class="start-btn"
                        onclick="startTask(${index})">
                        Start
                    </button>
                    <button class="delete-btn"
                        onclick="deleteTask(${index})">
                        Delete
                    </button>
                </div>
            `;
    } else if (task.status == "ongoing") {
      ongoingTasks.innerHTML += `
                <div class="task">
                    <p>${task.name}</p>
                    <button class="finish-btn"
                        onclick="finishTask(${index})">
                        Finish
                    </button>
                    <button class="delete-btn"
                        onclick="deleteTask(${index})">
                        Delete
                    </button>
                </div>
            `;
    } else if (task.status == "finished") {
      finishedTasks.innerHTML += `
                <div class="task">
                    <p>${task.name}</p>
                    <button class="undo-btn"
                        onclick="undoTask(${index})">
                        Undo
                    </button>
                    <button class="delete-btn"
                        onclick="deleteTask(${index})">
                        Delete
                    </button>
                </div>
            `;
    }
  });
}

function startTask(index) {
  tasks[index].status = "ongoing";
  displayTasks();
}

function finishTask(index) {
  tasks[index].status = "finished";
  displayTasks();
}

function undoTask(index) {
  tasks[index].status = "ongoing";
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}