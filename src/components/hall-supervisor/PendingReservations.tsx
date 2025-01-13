import React from 'react';
import ReservationManager from './reservations/ReservationManager';

const mockHalls = [
  {
    id: 'hall1',
    name: 'Main Hall',
    capacity: 200,
    availability: true,
  },
  {
    id: 'hall2',
    name: 'Conference Room A',
    capacity: 100,
    availability: true,
  }
];

export default function PendingReservations() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Pending Events</h1>
      </div>
      
      <ReservationManager halls={mockHalls} />
    </div>
  );
}