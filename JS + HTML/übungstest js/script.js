function generateNumber() {
    let highest = document.getElementById("highest").value;
    let lowest = document.getElementById("lowest").value;

    let generatedNumbers = "";

    for (let i = lowest; i <= highest; i++) {
        generatedNumbers += "<li>" + i + "</li>";
    }





    document.getElementById("output").innerHTML = generatedNumbers;
}