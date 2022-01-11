import Battery1 from './Battery.js'
export default class Remote{
    hasPower=true;
    isOn=false;
    constructor(){
        this.remoteBrandName="Sony";
    }
    setBattery(battery1,battery2){
        this.battery1=battery1;
        this.battery2=battery2;
    }
    
    turnOn(){
        if(!this.isOn){
            console.log("turned on...")
            this.battery1.chargingStatus-=5;
            this.battery2.chargingStatus-=5;
            this.isOn=true;
        }
        else{
            console.log("the remote is already in use...");
        }
    }

    turnOff(){
        if(this.isOn){
            console.log("turned off...");
            this.isOn=false;
        }
        else{
            console.log("you need to turn it on first...")
        }
    }

    getStatus(){
        console.log((this.battery1.chargingStatus+this.battery2.chargingStatus)/2);
    }

    hasCharge(){
        if((this.battery1.chargingStatus+this.battery2.chargingStatus)/2>=50){
            this.hasPower=true;
        }
        else{
            this.hasPower=false;
        }
        console.log("the battery has charge:" + this.hasPower);
    }
}