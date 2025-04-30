
import React from 'react';
import { Vehicle } from '@/types/vehicle';

interface MapSnippetProps {
  vehicles: Vehicle[];
}

const MapSnippet = ({ vehicles }: MapSnippetProps) => {
  return (
    <div className="neo-card h-full min-h-[300px] p-4 flex flex-col">
      <h2 className="text-lg font-medium mb-2">Vehicle Map</h2>
      <div className="flex-1 bg-telemko-dark-light/30 rounded relative overflow-hidden">
        {/* Placeholder for map - in a real app, you would integrate with a mapping library */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-0.5">
          {Array.from({ length: 144 }).map((_, index) => (
            <div key={index} className="bg-telemko-dark-light/20" />
          ))}
        </div>
        
        {/* Vehicle markers */}
        {vehicles.filter(v => v.status === 'online').map((vehicle) => {
          // Random position for demo
          const top = Math.floor(Math.random() * 80) + 10;
          const left = Math.floor(Math.random() * 80) + 10;
          
          return (
            <div 
              key={vehicle.id}
              className="absolute w-3 h-3 rounded-full"
              style={{ 
                top: `${top}%`, 
                left: `${left}%`,
                backgroundColor: 
                  vehicle.productStatus === 'updated' ? '#10B981' : 
                  vehicle.productStatus === 'outdated' ? '#F59E0B' : '#EF4444',
                boxShadow: `0 0 0 2px ${vehicle.productStatus === 'updated' ? 'rgba(16, 185, 129, 0.3)' : 
                  vehicle.productStatus === 'outdated' ? 'rgba(245, 158, 11, 0.3)' : 
                  'rgba(239, 68, 68, 0.3)'}`
              }}
            />
          );
        })}
        
        <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-telemko-dark/80 p-1 rounded">
          {vehicles.filter(v => v.status === 'online').length} vehicles online
        </div>
      </div>
      
      <div className="mt-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-telemko-green"></span>
            Updated
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-telemko-yellow"></span>
            Outdated
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-telemko-red"></span>
            Inactive
          </span>
        </div>
      </div>
    </div>
  );
};

export default MapSnippet;
