import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, CheckCircle, XCircle } from 'lucide-react';
import HallSelection from './HallSelection';
import EventDetails from '../activity-head/EventDetails';

const mockEvent = {
  id: 1,
  title: 'Web Development Workshop',
  description: 'A comprehensive workshop covering modern web development practices.',
  date: '2024-03-20',
  time: '10:00 AM',
  duration: '3 hours',
  location: 'TBD',
  requiredBy: 'Computer Science Department',
  presenter: 'Dr. Ahmed Ali',
  language: 'Arabic',
  participants: 45,
  maxParticipants: 50,
  objectives: [
    'Understand modern web development frameworks',
    'Learn best practices in frontend development',
    'Practice building responsive web applications'
  ],
  targetAudience: 'Computer Science students',
  type: 'Workshop',
  status: 'pending_halls'
};

export default function ReservationDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedHall, setSelectedHall] = useState('');
  const [comments, setComments] = useState('');

  const handleApprove = () => {
    if (!selectedHall) {
      alert('Please select a hall before approving');
      return;
    }
    // Handle hall reservation approval and notification
    navigate('/dashboard/hall-supervisor');
  };

  const handleReject = () => {
    if (!comments) {
      alert('Please provide a reason for rejection');
      return;
    }
    // Handle hall reservation rejection and notification
    navigate('/dashboard/hall-supervisor');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Hall Reservation Review</h1>
        <button
          onClick={() => navigate('/dashboard/hall-supervisor')}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Back
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Event Details</h2>
          <EventDetails event={mockEvent} />
          
          <div className="mt-6 border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Hall Assignment</h2>
            <HallSelection
              selectedHall={selectedHall}
              onHallSelect={setSelectedHall}
              requiredCapacity={mockEvent.maxParticipants}
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Comments
            </label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Add your comments or special instructions..."
            />
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={handleReject}
              className="flex items-center space-x-2 px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50"
            >
              <XCircle className="w-5 h-5" />
              <span>Reject</span>
            </button>
            <button
              onClick={handleApprove}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Approve & Reserve Hall</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}