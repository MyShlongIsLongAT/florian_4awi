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
            html += "<tr><th>Logo</th><th>Name</th><th>Founded</th></tr>"
            data.teams.forEach(element => {
                html += "<tr>"
                html += "<td><img width='100px' src='" + element.crestUrl + "'/></td>";
                html += "<td><li>" + element.name + "</li></td>";
                html += "<td><li>" + element.founded + "</li></td>";
                html += "</tr>"
            });
            html += "</table>";
            html += "</div>";
            document.getElementById("contentTeams").innerHTML = html;
        });
}