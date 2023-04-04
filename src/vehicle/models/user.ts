export default class User {
  private name: string;
  private fleetId: string | number;
  constructor(name: string, fleetId: string | number) {
    this.name = name;
    this.fleetId = fleetId;
  }
  getName() {
    return this.name;
  }
  getFleetId() {
    return this.fleetId;
  }
  setName(name: string) {
    this.name = name;
  }
  setFleetId(fleetId: number | string) {
    this.fleetId = fleetId;
  }
}
