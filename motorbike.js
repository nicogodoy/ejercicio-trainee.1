const Vehicle = require('./vehicle') 

const MotorBike =  class MotorBike extends Vehicle {

    constructor(model, brand, price, cc) {
        super(model, brand, price);
        this.cc = cc;
    }
  
  }

  module.exports = MotorBike

  