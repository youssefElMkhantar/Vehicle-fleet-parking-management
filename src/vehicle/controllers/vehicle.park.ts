import { Request, Response, NextFunction } from 'express';
import { fleets } from './../../infra/data/data';
import { vehicles } from './../../infra/data/data';
import { register as registerVehicle } from '../../app/commands/register';
import { addVehicle } from '../../app/commands/addVehicle';

type VehicleType = {
  name: string;
  id: string | number;
  location?: string;
};

// controller function for parking a vehicle
export const park = (req: Request, res: Response, next: NextFunction) => {
  let fleetId = req.body.fleetId;
  let vehicleId = req.body.vehicle.id;
  let location = req.body.location;
  if (!fleetId || !vehicleId || !location) {
    return res.status(400).json({
      error: 'bad request',
      message: 'please enter all required fields',
    });
  }
  if (!vehicles.find((elt) => elt.id === vehicleId)) {
    addVehicle(req.body.vehicle);
  }
  let exists = !registerVehicle(fleetId, vehicleId);
  let vehicle: VehicleType = vehicles.find((elt) => elt.id === vehicleId)!;
  let index = vehicles.indexOf(vehicle!)!;
  if (exists && req.body.location !== vehicle.location) {
    vehicles[index] = { ...vehicle, location: req.body.location };
    return res
      .status(200)
      .json({ message: 'successfully parked', vehicles: vehicles });
  } else {
    return res
      .status(403)
      .json({ message: 'vehicle already parked in this location' });
  }
};
