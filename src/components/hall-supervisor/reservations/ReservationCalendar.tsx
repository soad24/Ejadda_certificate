import React from 'react';
import { format } from 'date-fns';
import Calendar from 'react-calendar';
import { Clock, MapPin } from 'lucide-react';
import 'react-calendar/dist/Calendar.css';

interface Reservation {
  id: string;
  hallId: string;
  hallName: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface ReservationCalendarProps {
  reservations: Reservation[];
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export default function ReservationCalendar({ 
  reservations, 
  selectedDate, 
  onDateChange 
}: ReservationCalendarProps) {
  const getReservationsForDate = (date: Date) => {
    return reservations.filter(
      res => res.date === format(date, 'yyyy-MM-dd')
    );
  };

  const tileContent = ({ date }: { date: Date }) => {
    const dayReservations = getReservationsForDate(date);
    if (dayReservations.length > 0) {
      return (
        <div className="text-xs mt-1">
          <div className="flex items-center justify-center">
            <Clock className="w-3 h-3 text-blue-500" />
            <span className="ml-1">{dayReservations.length}</span>
          </div>
          {format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') && (
            <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg p-2 z-10 text-left mt-1">
              {dayReservations.map((res) => (
                <div key={res.id} className="p-2 hover:bg-gray-50 rounded">
                  <div className="font-medium">{res.hallName}</div>
                  <div className="flex items-center text-gray-600 mt-1">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{res.startTime} - {res.endTime}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  const tileClassName = ({ date }: { date: Date }) => {
    const dayReservations = getReservationsForDate(date);
    return dayReservations.length > 0 ? 'has-events' : '';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <style>
        {`
          .react-calendar {
            border: none;
            width: 100%;
            font-family: inherit;
          }
          .has-events {
            background-color: #EBF5FF;
            color: #1E40AF;
            font-weight: 500;
            position: relative;
          }
          .react-calendar__tile--active {
            background-color: #2563EB !important;
            color: white !important;
          }
          .react-calendar__tile--now {
            background-color: #F3F4F6;
          }
          .react-calendar__tile {
            padding: 1em 0.5em;
            position: relative;
          }
          .react-calendar__tile:enabled:hover,
          .react-calendar__tile:enabled:focus {
            background-color: #dbeafe;
          }
          .react-calendar__navigation button:enabled:hover,
          .react-calendar__navigation button:enabled:focus {
            background-color: #dbeafe;
          }
        `}
      </style>
      <Calendar
        onChange={onDateChange}
        value={selectedDate}
        tileContent={tileContent}
        tileClassName={tileClassName}
        className="w-full border-0"
      />

      {/* Selected Date Events Summary */}
      <div className="mt-4 border-t pt-4">
        <h3 className="font-medium text-gray-900 mb-2">
          Events on {format(selectedDate, 'MMMM d, yyyy')}
        </h3>
        <div className="space-y-2">
          {getReservationsForDate(selectedDate).map((res) => (
            <div key={res.id} className="p-2 bg-gray-50 rounded-lg">
              <div className="font-medium">{res.hallName}</div>
              <div className="flex items-center text-gray-600 mt-1">
                <Clock className="w-4 h-4 mr-2" />
                <span>{res.startTime} - {res.endTime}</span>
              </div>
              <div className="flex items-center text-gray-600 mt-1">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Hall ID: {res.hallId}</span>
              </div>
              <span className={`mt-2 inline-block px-2 py-1 rounded-full text-xs font-medium ${
                res.status === 'approved'
                  ? 'bg-green-100 text-green-800'
                  : res.status === 'rejected'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {res.status}
              </span>
            </div>
          ))}
          {getReservationsForDate(selectedDate).length === 0 && (
            <p className="text-gray-500 text-sm">No events scheduled</p>
          )}
        </div>
      </div>
    </div>
  );
}