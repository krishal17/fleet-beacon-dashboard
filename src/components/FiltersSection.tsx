
import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

interface FiltersSectionProps {
  showUpdatedOnly: boolean;
  setShowUpdatedOnly: (value: boolean) => void;
}

const FiltersSection = ({ showUpdatedOnly, setShowUpdatedOnly }: FiltersSectionProps) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="neo-card p-4">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <h2 className="text-lg font-medium">Vehicle Filters</h2>
        
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Date:</span>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="bg-telemko-dark-light/50 border-telemko-dark-light h-9 flex gap-2 hover:bg-telemko-dark-light">
                  <Calendar className="h-4 w-4" />
                  {date ? date.toLocaleDateString() : "Select Date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-telemko-dark-card border-telemko-dark-light shadow-neomorph">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Version:</span>
            <Select>
              <SelectTrigger className="w-32 bg-telemko-dark-light/50 border-telemko-dark-light h-9">
                <SelectValue placeholder="All versions" />
              </SelectTrigger>
              <SelectContent className="bg-telemko-dark-card border-telemko-dark-light">
                <SelectItem value="all">All versions</SelectItem>
                <SelectItem value="3.0">Version 3.0</SelectItem>
                <SelectItem value="2.5">Version 2.5</SelectItem>
                <SelectItem value="2.0">Version 2.0</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Location:</span>
            <Select>
              <SelectTrigger className="w-32 bg-telemko-dark-light/50 border-telemko-dark-light h-9">
                <SelectValue placeholder="All locations" />
              </SelectTrigger>
              <SelectContent className="bg-telemko-dark-card border-telemko-dark-light">
                <SelectItem value="all">All locations</SelectItem>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="la">Los Angeles</SelectItem>
                <SelectItem value="ch">Chicago</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="text-sm flex items-center gap-1.5 cursor-pointer">
              <input 
                type="checkbox" 
                className="rounded bg-telemko-dark-light/50 border-telemko-dark-light text-telemko-blue focus:ring-telemko-blue"
                checked={showUpdatedOnly}
                onChange={(e) => setShowUpdatedOnly(e.target.checked)}
              />
              <span>Updated firmware only</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersSection;
