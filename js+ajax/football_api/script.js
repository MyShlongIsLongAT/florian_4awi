let urlTeams = "https://api.football-data.org/v2/competitions/2002/teams";

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
        data.teams.forEach(element => {
            html += "<div class='team'>"
            html += "<li><img width='100px' src='" + element.crestUrl + "'/></li>"
            html += "<li>" + element.name + "</li>";
            html += "</div>"
        });
        document.getElementById("teams").innerHTML = html;
    });