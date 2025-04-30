
export interface Vehicle {
  id: string;
  lastSeen: string;
  location: string;
  speed: number;
  fuelLevel: number;
  status: 'online' | 'offline';
  productVersion: string;
  productStatus: 'updated' | 'outdated' | 'inactive';
  lat?: number;
  lng?: number;
}
