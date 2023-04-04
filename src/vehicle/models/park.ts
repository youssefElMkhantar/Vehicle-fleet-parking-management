export default class Park {
  private name: string;
  private parkId: string | number;
  // array of vehicle ids
  private vehicles: (string | number)[];
  constructor(
    name: string,
    parkId: string | number,
    vehicles: (string | number)[]
  ) {
    this.name = name;
    this.parkId = parkId;
    this.vehicles = vehicles;
  }
  getName() {
    return this.name;
  }
  getParkId() {
    return this.parkId;
  }
  getVehicles() {
    return this.vehicles;
  }
  setName(name: string) {
    this.name = name;
  }
  setParkId(fleetId: number | string) {
    this.parkId = fleetId;
  }
  setVehicles(vehicles: (string | number)[]) {
    this.vehicles = vehicles;
  }
  addVehicle(vehicleId: string | number) {
    this.vehicles.push(vehicleId);
  }
  removeVehicle(vehicleId: string | number) {
    const index = this.vehicles.indexOf(vehicleId);
    this.vehicles.splice(index, 1);
  }
}
