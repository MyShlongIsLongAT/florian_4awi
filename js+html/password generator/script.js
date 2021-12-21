function init() {
    onSliderInput();
}

function onSliderInput() {
    document.getElementById("lengthAmount").innerHTML = document.getElementById("sliderLength").value;
}

function getCharacterTypes() {
    let allCharacters = "";
    let mixedCharacters = "";
    let passwordLength = document.getElementById("sliderLength").value;
    let numbers = "0123456789";
    let specials = "!@#$%^&*+=";
    let lowerCases = "abcdefghijklmnopqrstuvwxyz";
    let upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (document.getElementById("number").checked) {
        allCharacters += numbers;
    }
    if (document.getElementById("upperCase").checked) {
        allCharacters += upperCases;
    }
    if (document.getElementById("lowerCase").checked) {
        allCharacters += lowerCases;
    }
    if (document.getElementById("special").checked) {
        allCharacters += specials;
    }

    if (allCharacters.length == 0) {
        alert("You need to choose some characters!!");
        Location.reload();
    }


    for (let i = 0; i < allCharacters.length; i++) {
        let position = Math.floor(Math.random() * allCharacters.length);
        mixedCharacters += allCharacters[position];
    }

    generatePassword(mixedCharacters, passwordLength);
}

function generatePassword(characterList, passwordLength) {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let position = Math.floor(Math.random() * characterList.length)
        password += characterList[position];
    }
    printPassword(password);
}

function printPassword(password) {
    console.log(password);
    document.getElementById("generatedPassword").innerHTML = password;
}