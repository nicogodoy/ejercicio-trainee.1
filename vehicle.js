
const Vehicle = class Vehicle {

    constructor(model, brand, price) {
        this.model = model;
        this.price = price;
        this.brand = brand;
    }

    getPrice() {
       let price = this.price.replace('$', '');
       price = price.replace('.', '');
       price = price.replace(',', '.');
      return Number(price) 
    }
  
  }

  module.exports = Vehicle