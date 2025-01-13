import React from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import { Users } from 'lucide-react';
import 'react-calendar/dist/Calendar.css';

interface Event {
  id: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  department: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface CalendarViewProps {
  events: Event[];
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export default function CalendarView({ events, selectedDate, onDateChange }: CalendarViewProps) {
  const getEventsForDate = (date: Date) => {
    return events.filter(event => event.date === format(date, 'yyyy-MM-dd'));
  };

  const tileContent = ({ date }: { date: Date }) => {
    const dayEvents = getEventsForDate(date);
    if (dayEvents.length > 0) {
      return (
        <div className="text-xs mt-1">
          <div className="flex items-center justify-center">
            <Users className="w-3 h-3 text-blue-500" />
            <span className="ml-1">{dayEvents.length}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  const tileClassName = ({ date }: { date: Date }) => {
    const dayEvents = getEventsForDate(date);
    return dayEvents.length > 0 ? 'has-events' : '';
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
    </div>
  );
}