
import React from 'react';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell 
} from '@/components/ui/table';
import { Eye, RefreshCw, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatusBadge from './StatusBadge';
import { Vehicle } from '@/types/vehicle';

interface VehicleTableProps {
  vehicles: Vehicle[];
  showUpdatedOnly: boolean;
}

const VehicleTable = ({ vehicles, showUpdatedOnly }: VehicleTableProps) => {
  const filteredVehicles = showUpdatedOnly 
    ? vehicles.filter(vehicle => vehicle.productStatus === 'updated')
    : vehicles;

  return (
    <div className="overflow-x-auto w-full">
      <Table>
        <TableHeader className="bg-telemko-dark-light/30">
          <TableRow>
            <TableHead>Vehicle ID</TableHead>
            <TableHead>Last Seen</TableHead>
            <TableHead>Current Location</TableHead>
            <TableHead>Speed</TableHead>
            <TableHead>Fuel Level</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Product Version</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredVehicles.map((vehicle) => (
            <TableRow key={vehicle.id} className="hover:bg-telemko-dark-light/10">
              <TableCell className="font-medium">{vehicle.id}</TableCell>
              <TableCell>{vehicle.lastSeen}</TableCell>
              <TableCell>{vehicle.location}</TableCell>
              <TableCell>{vehicle.speed} mph</TableCell>
              <TableCell>
                <div className="w-full bg-telemko-dark-light h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      vehicle.fuelLevel >= 70 ? 'bg-telemko-green' : 
                      vehicle.fuelLevel >= 30 ? 'bg-telemko-yellow' : 
                      'bg-telemko-red'
                    }`} 
                    style={{ width: `${vehicle.fuelLevel}%` }} 
                  />
                </div>
                <span className="text-xs text-muted-foreground">{vehicle.fuelLevel}%</span>
              </TableCell>
              <TableCell>
                <StatusBadge 
                  status={vehicle.status as 'online' | 'offline'} 
                />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span>{vehicle.productVersion}</span>
                  <StatusBadge status={vehicle.productStatus as 'updated' | 'outdated'} />
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end items-center gap-2">
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default VehicleTable;
