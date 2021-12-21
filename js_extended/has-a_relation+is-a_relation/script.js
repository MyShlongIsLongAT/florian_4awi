import Car from './Car.js';
import Engine from './Engine.js';
import SuperCar from './SuperCar.js';

/* let car1=new Car("Ferrari");
let car2=new Car("BMW");

let e1=new Engine(6969);
let e2=new Engine(187);

car1.setEngine(e1);
car2.setEngine(e2);

car1.drive();
car2.drive(); */

let car1=new Car("f1");
let car2=new SuperCar("sc1");

let e1=new Engine(6969);
let e2=new Engine(187);


car1.setEngine(e1);
car2.setEngine(e2);

car1.drive();

car2.drive();
car2.saySomethingSuperDuper();
