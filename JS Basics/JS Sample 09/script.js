//Aufgabe 1

for (var i = 0; i < 4; i++) {
    if (i % 2 == 0) {
        console.log("X X X X")
    } else {
        console.log("O O O O")
    }
}

//Aufgabe 2
let sum = 0;

for (var i = 1; i < 101; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log(sum);

//Aufgabe 3
console.log("X X X X");
console.log("X");
console.log("X X");
console.log("X");
console.log("X");