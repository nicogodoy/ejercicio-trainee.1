
const VehicleList = require("./vehiclelist");

const vehicles = [
  { brand: "Peugeot", model: "206", gates: 4, price: "$200.000,00" },
  {
    brand: "Honda",
    model: "Titan",
    cc: "125cc",
    price: "$60.000,00",
  },
  { brand: "Peugeot", model: "208", gates: 5, price: "$250.000,00" },
  { brand: "Yamaha", model: "YBR", cc: "160cc", price: "$80.500,50" },
];

const list = new VehicleList(vehicles);
list.printVehicleList()
console.log('=============================')
list.printMoreExpensive()
list.printMoreCheap();
list.printY();