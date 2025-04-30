
import React from 'react';
import { cn } from '@/lib/utils';

type StatusType = 'updated' | 'outdated' | 'inactive' | 'online' | 'offline';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const getStatusColor = (status: StatusType) => {
    switch (status) {
      case 'updated':
        return 'bg-telemko-green/20 text-telemko-green border-telemko-green/30';
      case 'outdated':
        return 'bg-telemko-yellow/20 text-telemko-yellow border-telemko-yellow/30';
      case 'inactive':
        return 'bg-telemko-red/20 text-telemko-red border-telemko-red/30';
      case 'online':
        return 'bg-telemko-green/20 text-telemko-green border-telemko-green/30';
      case 'offline':
        return 'bg-telemko-red/20 text-telemko-red border-telemko-red/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getStatusLabel = (status: StatusType) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <span
      className={cn(
        'px-2 py-0.5 text-xs rounded border inline-flex items-center gap-1.5',
        getStatusColor(status),
        className
      )}
    >
      <span className={cn('w-1.5 h-1.5 rounded-full', {
        'bg-telemko-green animate-pulse-light': status === 'updated' || status === 'online',
        'bg-telemko-yellow': status === 'outdated',
        'bg-telemko-red': status === 'inactive' || status === 'offline',
      })} />
      {getStatusLabel(status)}
    </span>
  );
};

export default StatusBadge;
