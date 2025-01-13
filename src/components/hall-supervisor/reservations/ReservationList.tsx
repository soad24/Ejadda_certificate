import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { format } from 'date-fns';

interface Reservation {
  id: string;
  hallId: string;
  hallName: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'pending' | 'reserved' | 'postponed';
}

interface ReservationListProps {
  reservations: Reservation[];
  selectedDate: Date;
  onReserve: (id: string) => void;
  onPostpone: (id: string) => void;
}

export default function ReservationList({
  reservations,
  selectedDate,
  onReserve,
  onPostpone,
}: ReservationListProps) {
  const formatTimeString = (timeStr: string) => {
    try {
      const [hours, minutes] = timeStr.split(':');
      const date = new Date();
      date.setHours(parseInt(hours), parseInt(minutes));
      return format(date, 'h:mm a');
    } catch (error) {
      return timeStr;
    }
  };

  const dateReservations = reservations.filter(
    res => res.date === format(selectedDate, 'yyyy-MM-dd')
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'reserved':
        return 'bg-green-100 text-green-800';
      case 'postponed':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">
        Reservations for {format(selectedDate, 'MMMM d, yyyy')}
      </h2>

      <div className="space-y-4">
        {dateReservations.map((reservation) => (
          <div
            key={reservation.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{reservation.hallName}</h3>
                <div className="mt-2 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>
                      {formatTimeString(reservation.startTime)} - {formatTimeString(reservation.endTime)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Hall ID: {reservation.hallId}</span>
                  </div>
                </div>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(reservation.status)}`}
              >
                {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
              </span>
            </div>

            {reservation.status === 'pending' && (
              <div className="mt-4 flex justify-end space-x-3">
                <button
                  onClick={() => onPostpone(reservation.id)}
                  className="px-3 py-1 border border-orange-300 text-orange-600 rounded-lg hover:bg-orange-50"
                >
                  Postpone
                </button>
                <button
                  onClick={() => onReserve(reservation.id)}
                  className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Reserve
                </button>
              </div>
            )}
          </div>
        ))}

        {dateReservations.length === 0 && (
          <p className="text-gray-500 text-center py-4">
            No reservations for this date
          </p>
        )}
      </div>
    </div>
  );
}