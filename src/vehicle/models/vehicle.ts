export default class Vehicle {
  // the name of the vehicle
  private name: string;
  // the identifier of the vehicle
  private id: string | number;
  private location: string;
  constructor(name: string, id: string | number, location: string) {
    this.name = name;
    this.id = id;
    this.location = location;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getLocation() {
    return this.location;
  }
  setName(name: string) {
    this.name = name;
  }
  setId(id: string | number) {
    this.id = id;
  }
  setLocation(location: string) {
    this.location = location;
  }
}
