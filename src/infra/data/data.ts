import User from '../../vehicle/models/user';
import Park from '../../vehicle/models/park';
import Fleet from '../../vehicle/models/fleet';
import Vehicle from '../../vehicle/models/vehicle';

type UserType = {
  name: string;
  fleetId: string | number;
};

type ParkType = {
  name: string;
  parkId: string | number;
  vehicles?: (string | number)[];
};

type VehicleType = {
  name: string;
  id: string | number;
  location?: string;
};

type FleetType = {
  vehicles: (string | number)[];
  id: string | number;
};

export const users: UserType[] = [
  { name: 'youssef', fleetId: 1 },
  { name: 'melisande', fleetId: 2 },
];

export const parks: ParkType[] = [
  { name: 'park1', parkId: 1, vehicles: [1] },
  { name: 'park2', parkId: 2, vehicles: [2] },
];

export const vehicles: VehicleType[] = [
  { name: 'mercedes', id: 1, location: 'right' },
  { name: 'bmw', id: 2, location: 'middle' },
];

export const fleets: FleetType[] = [
  { id: 1, vehicles: [1] },
  { id: 2, vehicles: [2] },
];
