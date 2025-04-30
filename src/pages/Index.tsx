
import React, { useState } from 'react';
import { ArrowDownToLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Topbar from '@/components/Topbar';
import Sidebar from '@/components/Sidebar';
import VehicleTable from '@/components/VehicleTable';
import MapSnippet from '@/components/MapSnippet';
import FiltersSection from '@/components/FiltersSection';
import { Vehicle } from '@/types/vehicle';
import { useToast } from '@/hooks/use-toast';

// Sample data for vehicles
const mockVehicles: Vehicle[] = [
  {
    id: 'TLM-1234',
    lastSeen: '2 mins ago',
    location: 'New York, NY',
    speed: 65,
    fuelLevel: 78,
    status: 'online',
    productVersion: '3.0.1',
    productStatus: 'updated',
  },
  {
    id: 'TLM-5678',
    lastSeen: '5 mins ago',
    location: 'Los Angeles, CA',
    speed: 0,
    fuelLevel: 45,
    status: 'online',
    productVersion: '2.5.3',
    productStatus: 'outdated',
  },
  {
    id: 'TLM-9012',
    lastSeen: '1 min ago',
    location: 'Chicago, IL',
    speed: 42,
    fuelLevel: 12,
    status: 'online',
    productVersion: '3.0.1',
    productStatus: 'updated',
  },
  {
    id: 'TLM-3456',
    lastSeen: '3 hours ago',
    location: 'Houston, TX',
    speed: 0,
    fuelLevel: 67,
    status: 'offline',
    productVersion: '2.0.5',
    productStatus: 'outdated',
  },
  {
    id: 'TLM-7890',
    lastSeen: '2 mins ago',
    location: 'Phoenix, AZ',
    speed: 55,
    fuelLevel: 89,
    status: 'online',
    productVersion: '3.0.1',
    productStatus: 'updated',
  },
  {
    id: 'TLM-4321',
    lastSeen: '7 mins ago',
    location: 'Philadelphia, PA',
    speed: 30,
    fuelLevel: 23,
    status: 'online',
    productVersion: '3.0.1',
    productStatus: 'updated',
  },
  {
    id: 'TLM-8765',
    lastSeen: '4 days ago',
    location: 'San Antonio, TX',
    speed: 0,
    fuelLevel: 50,
    status: 'offline',
    productVersion: '1.9.2',
    productStatus: 'outdated',
  },
];

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showUpdatedOnly, setShowUpdatedOnly] = useState(false);
  const { toast } = useToast();
  
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  
  const handleExportData = () => {
    toast({
      title: "Export Started",
      description: "Your data is being exported. Check downloads folder.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Topbar onToggleSidebar={toggleSidebar} />
      
      <div className="flex-1 flex">
        <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
        
        <main 
          className={`flex-1 p-6 transition-all duration-300 ${
            sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
          }`}
        >
          <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <h1 className="text-2xl font-bold">Active Vehicles</h1>
            <Button 
              onClick={handleExportData}
              className="bg-telemko-blue hover:bg-telemko-blue/80 text-white flex items-center gap-2 neo-button"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Export Data
            </Button>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 space-y-6">
              <FiltersSection 
                showUpdatedOnly={showUpdatedOnly}
                setShowUpdatedOnly={setShowUpdatedOnly}
              />
              
              <div className="neo-card overflow-hidden">
                <div className="p-4 border-b border-telemko-dark-light flex justify-between items-center">
                  <h2 className="text-lg font-medium">Vehicle List</h2>
                  <span className="text-sm text-muted-foreground">
                    {mockVehicles.filter(v => v.status === 'online').length} Online | {mockVehicles.length} Total
                  </span>
                </div>
                <VehicleTable 
                  vehicles={mockVehicles} 
                  showUpdatedOnly={showUpdatedOnly} 
                />
              </div>
            </div>
            
            <div className="xl:col-span-1">
              <MapSnippet vehicles={mockVehicles} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
