import React, { useState } from 'react';
import { format } from 'date-fns';
import ReservationCalendar from './ReservationCalendar';
import ReservationList from './ReservationList';
import ReservationCalendarModal from './ReservationCalendarModal';
import PostponeModal from './PostponeModal';
import { Hall } from '../../../types/hall';

interface ReservationManagerProps {
  halls: Hall[];
}

const mockReservations = [
  {
    id: '1',
    hallId: 'hall1',
    hallName: 'Main Hall',
    eventId: 'event1',
    eventTitle: 'Web Development Workshop',
    date: format(new Date(), 'yyyy-MM-dd'),
    startTime: '10:00',
    endTime: '12:00',
    status: 'pending',
    requestedBy: 'John Smith',
    department: 'Computer Science'
  },
  {
    id: '2',
    hallId: 'hall2',
    hallName: 'Conference Room A',
    eventId: 'event2',
    eventTitle: 'AI Seminar',
    date: format(new Date(), 'yyyy-MM-dd'),
    startTime: '14:00',
    endTime: '16:00',
    status: 'pending',
    requestedBy: 'Sarah Johnson',
    department: 'AI Research'
  }
];

export default function ReservationManager({ halls }: ReservationManagerProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [showPostponeModal, setShowPostponeModal] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState<any>(null);
  const [reservations, setReservations] = useState(mockReservations);

  const handleReserve = (id: string) => {
    const reservation = reservations.find(r => r.id === id);
    if (reservation) {
      setSelectedReservation(reservation);
      setShowCalendarModal(true);
    }
  };

  const handlePostpone = (id: string) => {
    const reservation = reservations.find(r => r.id === id);
    if (reservation) {
      setSelectedReservation(reservation);
      setShowPostponeModal(true);
    }
  };

  const handlePostponeSubmit = (data: { reason: string; suggestedDates: string[] }) => {
    if (!selectedReservation) return;

    setReservations(reservations.map(res =>
      res.id === selectedReservation.id
        ? {
            ...res,
            status: 'postponed',
            postponeReason: data.reason,
            suggestedDates: data.suggestedDates
          }
        : res
    ));

    setShowPostponeModal(false);
    setSelectedReservation(null);
  };

  const handleReservationSubmit = (data: { hallId: string; date: string; startTime: string; endTime: string }) => {
    if (!selectedReservation) return;

    const selectedHall = halls.find(h => h.id === data.hallId);
    if (!selectedHall) return;

    setReservations(reservations.map(res =>
      res.id === selectedReservation.id
        ? {
            ...res,
            status: 'reserved',
            hallId: data.hallId,
            hallName: selectedHall.name,
            date: data.date,
            startTime: data.startTime,
            endTime: data.endTime
          }
        : res
    ));

    setShowCalendarModal(false);
    setSelectedReservation(null);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ReservationCalendar
            reservations={reservations}
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />
        </div>

        <div className="lg:col-span-2">
          <ReservationList
            reservations={reservations.filter(
              res => res.date === format(selectedDate, 'yyyy-MM-dd')
            )}
            selectedDate={selectedDate}
            onReserve={handleReserve}
            onPostpone={handlePostpone}
          />
        </div>
      </div>

      {showCalendarModal && (
        <ReservationCalendarModal
          halls={halls}
          onSubmit={handleReservationSubmit}
          onClose={() => {
            setShowCalendarModal(false);
            setSelectedReservation(null);
          }}
        />
      )}

      {showPostponeModal && (
        <PostponeModal
          onSubmit={handlePostponeSubmit}
          onClose={() => {
            setShowPostponeModal(false);
            setSelectedReservation(null);
          }}
        />
      )}
    </div>
  );
}