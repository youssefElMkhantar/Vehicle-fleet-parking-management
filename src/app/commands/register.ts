import { fleets } from '../../infra/data/data';
import { vehicles } from '../../infra/data/data';

export const register = (
  fleetId: string | number,
  vehicleId: string | number
) => {
  let fleet = fleets.find((elt) => elt.id === fleetId);
  let Vid = fleet!.vehicles.find((elt) => elt === vehicleId);
  if (Vid) {
    return false;
  } else {
    let vehicle = vehicles.find((elt) => elt.id === vehicleId);
    fleet!.vehicles.push(vehicle!.id);
    return true;
  }
};
