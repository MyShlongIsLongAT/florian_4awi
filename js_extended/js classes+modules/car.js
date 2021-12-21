class Car{
    horsePower=500;
    constructor(color,brand,country="USA"){
        this.color=color;
        this.brand=brand;
        this.country=country;
    }

    printFacts(){
        console.log(""+this.brand+"-"+this.color+"-"+this.country+"-"+this.horsePower);
    }
}

let car1 = new Car("blue","Tesla","Germany");
car1.printFacts();