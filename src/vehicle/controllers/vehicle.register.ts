import { fleets } from './../../infra/data/data';
import { vehicles } from './../../infra/data/data';
import { Request, Response, NextFunction } from 'express';
import { register as registerVehicle } from '../../app/commands/register';
import { addVehicle } from '../../app/commands/addVehicle';

// controller function for registering a vehicle
export const register = (req: Request, res: Response, next: NextFunction) => {
  let fleetId = req.body.fleetId;
  let vehicleId = req.body.vehicle.id;
  if (!fleetId || !vehicleId) {
    return res.status(400).json({
      error: 'bad request',
      message: 'please enter all required fields',
    });
  }
  if (!vehicles.find((elt) => elt.id === vehicleId)) {
    addVehicle(req.body.vehicle);
  }
  let registered = registerVehicle(fleetId, vehicleId);
  if (registered) {
    return res.status(200).json({
      message: 'vehicle successfully registered',
      vehicles: vehicles,
      fleets: fleets,
    });
  } else {
    return res
      .status(403)
      .json({ message: 'vehicle already exists in the fleet specified' });
  }
};
