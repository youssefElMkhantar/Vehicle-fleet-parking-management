import { vehicles } from '../../infra/data/data';

type vehicle = {
  name: string;
  id: string | number;
  location?: string;
};

export const addVehicle = (vehicle: vehicle) => {
  vehicles.push(vehicle);
};
