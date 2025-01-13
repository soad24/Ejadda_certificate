import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventList from '../components/supervisor/EventList';
import EventForm from '../components/supervisor/EventForm';
import EventDetailsView from '../components/supervisor/event-details/EventDetailsView';
import EventParticipants from '../components/supervisor/EventParticipants';

// Mock data for the event details
const mockEventDetails = {
  id: 2,
  title: 'AI & Machine Learning Seminar',
  date: 'March 25, 2024',
  time: '2:00 PM',
  location: 'Main Hall',
  requiredBy: 'AI Research Center',
  presenter: 'Prof. Sarah Anderson',
  language: 'Arabic & English',
  participants: 0,
  status: 'pending_halls'
};

export default function EventSupervisor() {
  return (
    <Routes>
      <Route index element={<EventList />} />
      <Route path="new" element={<EventForm />} />
      <Route path=":id/edit" element={<EventForm />} />
      <Route path=":id/workflow" element={<EventDetailsView event={mockEventDetails} />} />
      <Route path=":id/participants" element={<EventParticipants />} />
    </Routes>
  );
}