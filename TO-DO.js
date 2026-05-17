let input = document.getElementById("taskInput");

let addButton = document.getElementById("addBtn");

let taskList = document.getElementById("taskList");

let tasks = [];



/* ================= CREATE TASK ================= */

function addTask(){

    if(input.value.trim() === ""){

        alert("Enter Task");

        return;
    }

    let task = {

        id: Date.now(),

        text: input.value
    };

    tasks.push(task);

    renderTasks();

    input.value = "";
}



/* ================= DISPLAY TASKS ================= */

function renderTasks(){

    taskList.innerHTML = "";

    tasks.forEach(function(task){

        let taskDiv = document.createElement("div");

        taskDiv.classList.add("task");



        /* TASK TEXT */

        let text = document.createElement("span");

        text.classList.add("task-text");

        text.textContent = task.text;



        /* BUTTONS CONTAINER */

        let buttons = document.createElement("div");

        buttons.classList.add("task-buttons");



        /* EDIT BUTTON */

        let editBtn = document.createElement("button");

        editBtn.classList.add("edit-btn");

        editBtn.textContent = "Edit";



        editBtn.onclick = function(){

            let newText = prompt("Edit Task", task.text);

            if(newText !== null && newText.trim() !== ""){

                editTask(task.id , newText);
            }
        };



        /* DELETE BUTTON */

        let deleteBtn = document.createElement("button");

        deleteBtn.classList.add("delete-btn");

        deleteBtn.textContent = "Delete";



        deleteBtn.onclick = function(){

            deleteTask(task.id);
        };



        /* APPEND ELEMENTS */

        buttons.appendChild(editBtn);

        buttons.appendChild(deleteBtn);



        taskDiv.appendChild(text);

        taskDiv.appendChild(buttons);



        taskList.appendChild(taskDiv);

    });
}



/* ================= EDIT TASK ================= */

function editTask(id , newText){

    tasks = tasks.map(function(task){

        if(task.id === id){

            return {

                id: task.id,

                text: newText
            };
        }

        return task;
    });

    renderTasks();
}



/* ================= DELETE TASK ================= */

function deleteTask(id){

    tasks = tasks.filter(function(task){

        return task.id !== id;
    });

    renderTasks();
}



/* ================= BUTTON EVENT ================= */

addButton.onclick = addTask;