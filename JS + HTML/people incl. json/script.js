var people = [{
        "firstname": "Florian",
        "lastname": "Breuker",
        "image": "https://images-na.ssl-images-amazon.com/images/I/81lAVQauVuL.png",
        "age": 17
    },
    {
        "firstname": "David",
        "lastname": "Hartmann",
        "image": "https://www.oefb.at/oefb2/images/1278650591628556536_1299024f0725005b5064-1,0-320x320.png",
        "age": 18
    },
];

function printCards() {
    var html = "";
    for (i = 0; i < people.length; i++) {
        html += "<div class='cards'>";
        html += "<div class='nameOfPeople'>";
        html += "<ul>";
        html += "<li>" + people[i].firstname + "</li>";
        html += "<li>" + people[i].lastname + "</li>";
        html += "</ul>";
        html += "</div>";
        html += "<div class='imageOfPeople'>";
        html += "<img src='" + people[i].image + "' width='200 px'>";
        html += "</div>";
        html += "<div class='ageOfPeople'>";
        html += people[i].age;
        html += "</div>";
        html += "</div>";

    }
    document.getElementById("wrapper").innerHTML = html;
}

printCards();