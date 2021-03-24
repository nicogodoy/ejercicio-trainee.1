const Car = require("./car");
const MotorBike = require("./motorbike");

const VehicleList = class VehicleList {
  constructor(vehicles) {
    this.vehicles = [];
    this.loadVehicles(vehicles);
  }

  loadVehicles(vehicles) {
    vehicles.forEach((vehicle) => {
      if (vehicle.gates) {
        this.vehicles.push(
          new Car(vehicle.model, vehicle.brand, vehicle.price, vehicle.gates)
        );
      }

      if (vehicle.cc) {
        this.vehicles.push(
          new MotorBike(vehicle.model, vehicle.brand, vehicle.price, vehicle.cc)
        );
      }
    });
  }

  printVehicleList() {
    this.vehicles.forEach((vehicle) => {
      if (vehicle instanceof Car) {
        console.log(
          `Modelo: ${vehicle.model} // Modelo: ${vehicle.model} // Puertas: ${vehicle.gates} // Precio: ${vehicle.price}`
        );
      }

      if (vehicle instanceof MotorBike) {
        console.log(
          `Modelo: ${vehicle.model} // Modelo: ${vehicle.model} // Cilindrada: ${vehicle.cc} // Precio: ${vehicle.price}`
        );
      }
    });
  }

  printMoreExpensive() {
    let expensive = this.vehicles.reduce((max, min) =>
      max.getPrice() > min.getPrice() ? max : min
    );
    console.log("Vehiculo mas caro:" + expensive.brand + " " + expensive.model);
  }
  printMoreCheap() {
    let cheap = this.vehicles.reduce((min, max) =>
      min.getPrice() < max.getPrice() ? min : max
    );
    console.log("Vehiculo mas barato:" + cheap.brand + " " + cheap.model);
  }
  printY(vehicle) {
    const sentence = 

    //const word = "Y";

    console.log(
      `Vehículo que contiene en el modelo la letra ‘Y’: "${word}" ${
        sentence.includes(word) ? "is" : "is not"
      } in the sentence`
    );
  }
};

module.exports = VehicleList;
