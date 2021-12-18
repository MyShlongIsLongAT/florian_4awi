function getTeams() {
    let urlTeams = "https://api.football-data.org/v2/competitions/2002/teams"
    fetch(urlTeams, {
            method: 'GET',
            headers: {
                "x-auth-token": "819babcd7902454f930c154272296d78",
            }
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let html = "";
            html += "<div class='team'>";
            html += "<table>";
            html += "<tr class='separator'><tr>"
            data.teams.forEach(element => {
                html += "<tr>"
                html += "<td><img width='100px' src='" + element.crestUrl + "'/></td>";
                html += "<td><li onClick='getPlayers(" + element.id + ")'> " + element.name + " </li></td > ";
                html += "<td><li>" + element.shortName + "</li></td>";
                html += "<td><li>" + element.founded + "</li></td>";
                html += "<td><li>" + element.venue + "</li></td>";
                html += "<td><li>" + element.clubColors + "</li></td>";
                html += "</tr>"
                html += "<tr class='separator'><tr>"
            });
            html += "</table>";
            html += "</div>";
            document.getElementById("contentTeams").innerHTML = html;
        });
}

function getPlayers(teamId) {
    let urlTeams = "http://api.football-data.org/v2/teams/" + teamId;
    console.log(urlTeams)
    fetch(urlTeams, {
            method: 'GET',
            headers: {
                "x-auth-token": "819babcd7902454f930c154272296d78",
            }
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let html = "";
            html += "<div class='team'>";
            html += "<table>";
            html += "<tr class='separator'><tr>"
            data.squad.forEach(element => {
                html += "<tr>"
                html += "<td><li>" + element.name + "</li></td>";
                html += "<td><li>" + element.position + "</li></td>";
                html += "<td><li>" + element.nationality + "</li></td>";
                html += "<td><li>" + element.role + "</li></td>";
                html += "</tr>"
                html += "<tr class='separator'><tr>"
            });
            html += "</table>";
            html += "</div>";
            document.getElementById("contentTeams").innerHTML = html;
        });
}

function getScorer() {
    let urlTeams = "http://api.football-data.org/v2/competitions/BL1/scorers";
    console.log(urlTeams)
    fetch(urlTeams, {
            method: 'GET',
            headers: {
                "x-auth-token": "819babcd7902454f930c154272296d78",
            }
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let html = "";
            html += "<div class='team'>";
            html += "<table>";
            html += "<tr class='separator'><tr>"
            data.scorers.forEach(element => {
                html += "<tr>"
                html += "<td><li>" + element.player.name + "</li></td>";
                //html += "<td><li>" + element.player.team.name + "</li></td>";
                html += "<td><li>" + element.player.position + "</li></td>";
                html += "<td><li>" + element.numberOfGoals + "</li></td>";
                html += "</tr>"
                html += "<tr class='separator'><tr>"
            });
            html += "</table>";
            html += "</div>";
            document.getElementById("contentTeams").innerHTML = html;
        });
}