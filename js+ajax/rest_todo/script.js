function registerEvents() {
    document.getElementById("loadTasks").addEventListener("click", function() {
        loadTasks();
    })

    document.getElementById("loadUsers").addEventListener("click", function() {
        loadUsers();
    })
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let html = "";
            data.forEach(user => {
                html += "<li>" + user.name + "</li>"
            });
            document.getElementById("tasks").innerHTML = html;
        });
}

function loadTasks() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let html = "";
            data.forEach(todo => {
                html += "<li>" + todo.title + "</li>"
                console.log(todo.title);
            });
            document.getElementById("tasks").innerHTML = html;


        });
}

registerEvents();