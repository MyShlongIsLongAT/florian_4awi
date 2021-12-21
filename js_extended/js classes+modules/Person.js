export default class Person{
    constructor(name,age,city){
        this.name=name;
        this.age=age;
        this.city=city;
    }
    sayHello(){
        console.log("Hello "+this.name+ " you are " +this.age+ " years old and you are currently living in "+this.city);
    }
}