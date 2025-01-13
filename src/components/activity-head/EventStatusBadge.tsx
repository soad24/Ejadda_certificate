import React from 'react';
import { ActivityEvent } from '../../types/activity';
import { getEventStatusColor, getEventStatusLabel } from '../../utils/activity';

interface EventStatusBadgeProps {
  status: ActivityEvent['status'];
}

export default function EventStatusBadge({ status }: EventStatusBadgeProps) {
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEventStatusColor(status)}`}>
      {getEventStatusLabel(status)}
    </span>
  );
}