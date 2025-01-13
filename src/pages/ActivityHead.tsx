import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PendingEvents from '../components/activity-head/PendingEvents';
import EventReview from '../components/activity-head/EventReview';
import EditEvent from '../components/activity-head/EditEvent';

export default function ActivityHead() {
  return (
    <Routes>
      <Route index element={<PendingEvents />} />
      <Route path=":id/review" element={<EventReview />} />
      <Route path=":id/edit" element={<EditEvent />} />
    </Routes>
  );
}