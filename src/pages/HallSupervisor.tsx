import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HallNavbar from '../components/hall-supervisor/navigation/HallNavbar';
import PendingReservations from '../components/hall-supervisor/PendingReservations';
import ReservationDetails from '../components/hall-supervisor/ReservationDetails';
import HallManagement from '../components/hall-supervisor/HallManagement';
import HallStatistics from '../components/hall-supervisor/statistics/HallStatistics';

export default function HallSupervisor() {
  return (
    <div>
      <HallNavbar />
      <Routes>
        <Route index element={<PendingReservations />} />
        <Route path="events" element={<PendingReservations />} />
        <Route path="pending" element={<PendingReservations />} />
        <Route path="statistics" element={<HallStatistics />} />
        <Route path=":id/review" element={<ReservationDetails />} />
        <Route path="halls" element={<HallManagement />} />
      </Routes>
    </div>
  );
}