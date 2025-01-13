import React, { useState } from 'react';
import { Download, Plus } from 'lucide-react';
import { EventParticipant } from '../../types/event';
import ParticipantList from './participants/ParticipantList';
import ParticipantForm from './participants/ParticipantForm';
import ParticipantStats from './participants/ParticipantStats';

export default function EventParticipants() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingParticipant, setEditingParticipant] = useState<EventParticipant | undefined>();
  const [participants, setParticipants] = useState<EventParticipant[]>([
    {
      id: 1,
      studentId: 'CS2024001',
      name: 'سعاد الخاطري',
      email: 'soad.alkhatri@utas.edu.om',
      registrationDate: '2024-03-15',
      attended: false,
    },
    {
      id: 2,
      studentId: 'CS2024002',
      name: 'Michael Chen',
      email: 'michael.c@university.edu',
      registrationDate: '2024-03-15',
      attended: true,
    },
    {
      id: 3,
      studentId: 'CS2024003',
      name: 'Emma Davis',
      email: 'emma.d@university.edu',
      registrationDate: '2024-03-16',
      attended: true,
    },
  ]);

  const handleAttendance = (participantId: number) => {
    setParticipants(participants.map(p => 
      p.id === participantId ? { ...p, attended: !p.attended } : p
    ));
  };

  const handleEdit = (participant: EventParticipant) => {
    setEditingParticipant(participant);
    setShowForm(true);
  };

  const handleDelete = (participantId: number) => {
    if (confirm('Are you sure you want to remove this participant?')) {
      setParticipants(participants.filter(p => p.id !== participantId));
    }
  };

  const handleSubmit = (participantData: Partial<EventParticipant>) => {
    if (editingParticipant) {
      // Update existing participant
      setParticipants(participants.map(p =>
        p.id === editingParticipant.id
          ? { ...p, ...participantData }
          : p
      ));
    } else {
      // Add new participant
      const newParticipant: EventParticipant = {
        id: Math.max(...participants.map(p => p.id)) + 1,
        studentId: participantData.studentId!,
        name: participantData.name!,
        email: participantData.email!,
        registrationDate: new Date().toISOString().split('T')[0],
        attended: false,
      };
      setParticipants([...participants, newParticipant]);
    }
    setShowForm(false);
    setEditingParticipant(undefined);
  };

  const handleDownload = () => {
    // Create CSV content
    const headers = ['Student ID', 'Name', 'Email', 'Registration Date', 'Attendance'];
    const rows = participants.map(p => [
      p.studentId,
      p.name,
      p.email,
      p.registrationDate,
      p.attended ? 'Present' : 'Absent'
    ]);
    const csvContent = [headers, ...rows]
      .map(row => row.join(','))
      .join('\n');

    // Create and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'participants.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Event Participants</h2>
        <div className="flex space-x-3">
          <button
            onClick={() => {
              setEditingParticipant(undefined);
              setShowForm(true);
            }}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            <span>Add Participant</span>
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Download className="w-4 h-4" />
            <span>Download List</span>
          </button>
        </div>
      </div>

      <ParticipantStats participants={participants} />

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6">
          <ParticipantList
            participants={participants}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onAttendanceChange={handleAttendance}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>
      </div>

      {showForm && (
        <ParticipantForm
          participant={editingParticipant}
          onSubmit={handleSubmit}
          onClose={() => {
            setShowForm(false);
            setEditingParticipant(undefined);
          }}
        />
      )}
    </div>
  );
}