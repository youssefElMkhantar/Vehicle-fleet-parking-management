export default class Fleet {
  // array of vehicle ids
  private vehicles: (string | number)[];
  // identifier of the fleet
  private id: string | number;
  constructor(vehicles: (string | number)[], id: string | number) {
    this.vehicles = vehicles;
    this.id = id;
  }

  getVehicles() {
    return this.vehicles;
  }
  getId() {
    return this.id;
  }
  setVehicles(vehicles: (string | number)[]) {
    this.vehicles = vehicles;
  }
  setId(id: string | number) {
    this.id = id;
  }
  addVehicle(vehicleId: string | number) {
    this.vehicles.push(vehicleId);
  }
  removeVehicle(vehicleId: string | number) {
    const index = this.vehicles.indexOf(vehicleId);
    this.vehicles.splice(index, 1);
  }
}
