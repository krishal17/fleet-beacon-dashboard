
import React from 'react';
import {
  LayoutDashboard,
  Truck,
  Power,
  Settings,
  Wrench,
  FileBarChart,
  ChevronLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: false },
    { icon: Truck, label: 'Active Vehicles', active: true },
    { icon: Power, label: 'Inactive Vehicles', active: false },
    { icon: Wrench, label: 'Installations', active: false },
    { icon: FileBarChart, label: 'Reports', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-telemko-dark border-r border-telemko-dark-light transition-all duration-300 z-20",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="p-3 flex-1">
          <Button
            variant="ghost"
            size="sm"
            className="mb-6 w-full justify-between"
            onClick={onToggle}
          >
            {!isCollapsed && <span>Navigation</span>}
            <ChevronLeft
              className={cn(
                "h-4 w-4 transition-all",
                isCollapsed && "rotate-180"
              )}
            />
          </Button>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={cn("sidebar-item", item.active && "active")}
              >
                <item.icon className="h-5 w-5" />
                {!isCollapsed && <span>{item.label}</span>}
              </a>
            ))}
          </nav>
        </div>

        <div className="p-3 border-t border-telemko-dark-light">
          <div className={cn("flex items-center gap-3", isCollapsed && "justify-center")}>
            <div className="h-8 w-8 rounded-full bg-telemko-blue/20 flex items-center justify-center text-sm font-medium">
              JD
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                <span className="text-sm font-medium">John Doe</span>
                <span className="text-xs text-muted-foreground">Administrator</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
