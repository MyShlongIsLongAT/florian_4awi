//var taskList = ["kochen", "sosi hü", "chemie lerna"];

var taskList = {
    "tasks": [

    ]

};

printToDoList();

function addTask() {
    let newTask = document.getElementById("inputTask").value;
    let newCreator = document.getElementById("inputCreator").value;

    taskList["tasks"].push({ "taskName": newTask, "taskCreator": newCreator, "taskStatus": false });
    printToDoList();
}

function printToDoList() {
    document.getElementById("tasks").innerHTML = getHTMLforToDoList();
}

function getHTMLforToDoList() {
    document.getElementById("tasks").innerHTML = "";
    let html = "";
    for (let i = 0; i < taskList.tasks.length; i++) {
        let checked = "";
        if (taskList.tasks[i].taskStatus) {
            checked = "checked";
        }
        html += "<li><input onClick='setCheckboxStatus(this)' class='checkbox' type='checkbox' data-index='" + i + "'" + checked + "/>" + taskList.tasks[i].taskName + " - " + taskList.tasks[i].taskCreator + "</li>";
    }
    return html;
}

function setCheckboxStatus(checkBoxElement) {
    elementIndex = checkBoxElement.attributes["data-index"].value;
    taskList.tasks[elementIndex].taskStatus = checkBoxElement.checked;
}