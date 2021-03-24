const Vehicle = require('./vehicle') 

const Car =  class Car extends Vehicle {

    constructor(model, brand, price, gates) {
        super(model, brand, price);
        this.gates = gates;
    }
  
  }

  module.exports = Car