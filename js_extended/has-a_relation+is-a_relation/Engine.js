export default class Engine{
    constructor(serialNumber){
        this.serialNumber=serialNumber;
    }

    go(){
        console.log("I am running "+this.serialNumber);
    }
}