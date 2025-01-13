import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, Info } from 'lucide-react';
import Calendar from 'react-calendar';
import { format, differenceInMinutes, addDays } from 'date-fns';
import 'react-calendar/dist/Calendar.css';

interface EventDateTimeProps {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onStartTimeChange: (time: string) => void;
  onEndTimeChange: (time: string) => void;
  onDurationChange: (duration: string) => void;
}

export default function EventDateTime({
  startDate,
  endDate,
  startTime,
  endTime,
  onStartDateChange,
  onEndDateChange,
  onStartTimeChange,
  onEndTimeChange,
  onDurationChange,
}: EventDateTimeProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [durationInfo, setDurationInfo] = useState<{
    days: number;
    hours: number;
    minutes: number;
  } | null>(null);

  // Initialize calendar value for react-calendar
  const calendarValue = selectedDates.length > 0 
    ? [selectedDates[0], selectedDates[selectedDates.length - 1]]
    : null;

  useEffect(() => {
    if (selectedDates.length > 0) {
      const firstDate = selectedDates[0];
      const lastDate = selectedDates[selectedDates.length - 1];
      
      onStartDateChange(format(firstDate, 'yyyy-MM-dd'));
      onEndDateChange(format(lastDate, 'yyyy-MM-dd'));

      // Calculate total duration
      if (startTime && endTime) {
        const [startHour, startMinute] = startTime.split(':').map(Number);
        const [endHour, endMinute] = endTime.split(':').map(Number);
        
        const dailyMinutes = (endHour * 60 + endMinute) - (startHour * 60 + startMinute);
        const totalMinutes = dailyMinutes * selectedDates.length;
        
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        
        setDurationInfo({
          days: selectedDates.length,
          hours,
          minutes
        });
        
        onDurationChange(`${selectedDates.length} day${selectedDates.length > 1 ? 's' : ''} (${hours}h${minutes > 0 ? ` ${minutes}m` : ''} total)`);
      }
    }
  }, [selectedDates, startTime, endTime]);

  const handleDateSelection = (value: Date[] | [Date, Date]) => {
    if (Array.isArray(value) && value.length === 2) {
      // Handle range selection
      const [start, end] = value;
      const dates: Date[] = [];
      let currentDate = start;
      
      while (currentDate <= end) {
        dates.push(new Date(currentDate));
        currentDate = addDays(currentDate, 1);
      }
      
      setSelectedDates(dates);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Date and Time</h3>

      <div className="space-y-4">
        {/* Date Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Event Dates
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowCalendar(!showCalendar)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-left flex items-center space-x-2"
            >
              <CalendarIcon className="w-5 h-5 text-gray-400" />
              <span>
                {selectedDates.length > 0
                  ? selectedDates.length === 1
                    ? format(selectedDates[0], 'MMM d, yyyy')
                    : `${format(selectedDates[0], 'MMM d, yyyy')} - ${format(
                        selectedDates[selectedDates.length - 1],
                        'MMM d, yyyy'
                      )}`
                  : 'Select dates'}
              </span>
            </button>

            {showCalendar && (
              <div className="absolute z-10 mt-1 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                <style>
                  {`
                    .react-calendar {
                      border: none;
                      width: 350px;
                      font-family: inherit;
                    }
                    .react-calendar__tile--active {
                      background: #2563eb !important;
                      color: white;
                    }
                    .react-calendar__tile--now {
                      background: #f3f4f6;
                    }
                    .react-calendar__tile--hover {
                      background: #dbeafe !important;
                    }
                  `}
                </style>
                <Calendar
                  selectRange={true}
                  value={calendarValue}
                  onChange={handleDateSelection}
                  minDate={new Date()}
                />
              </div>
            )}
          </div>
        </div>

        {/* Time Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Time
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="time"
                required
                value={startTime}
                onChange={(e) => onStartTimeChange(e.target.value)}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Time
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="time"
                required
                value={endTime}
                onChange={(e) => onEndTimeChange(e.target.value)}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Duration Info */}
        {durationInfo && (
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <Info className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900">
                  {durationInfo.days === 1 ? 'Single Day Event' : 'Multi-Day Event'}
                </h4>
                <p className="text-sm text-blue-800 mt-1">
                  Duration: {durationInfo.days} day{durationInfo.days > 1 ? 's' : ''} ({durationInfo.hours}h{durationInfo.minutes > 0 ? ` ${durationInfo.minutes}m` : ''} total)
                </p>
                <p className="text-sm text-blue-700 mt-1">
                  Selected dates: {selectedDates.map(date => format(date, 'MMM d')).join(', ')}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}