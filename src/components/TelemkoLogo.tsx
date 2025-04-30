
import React from 'react';

const TelemkoLogo = ({ className = "h-8 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-8 w-8 rounded-full bg-telemko-blue flex items-center justify-center overflow-hidden">
        <div className="absolute h-4 w-4 bg-telemko-dark-card rounded-full" />
        <div className="absolute h-6 w-6 border-t-2 border-r-2 border-white rounded-full" />
      </div>
      <span className="font-bold text-xl">Telemko</span>
    </div>
  );
};

export default TelemkoLogo;
