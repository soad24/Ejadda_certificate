import React from 'react';
import { Search, Check, X, Edit, Trash2 } from 'lucide-react';
import { EventParticipant } from '../../../types/event';

interface ParticipantListProps {
  participants: EventParticipant[];
  onEdit: (participant: EventParticipant) => void;
  onDelete: (participantId: number) => void;
  onAttendanceChange: (participantId: number) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function ParticipantList({
  participants,
  onEdit,
  onDelete,
  onAttendanceChange,
  searchTerm,
  onSearchChange,
}: ParticipantListProps) {
  const filteredParticipants = participants.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.studentId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by name or student ID..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">Student ID</th>
              <th className="text-left py-3 px-4">Name</th>
              <th className="text-left py-3 px-4">Email</th>
              <th className="text-left py-3 px-4">Registration Date</th>
              <th className="text-left py-3 px-4">Attendance</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredParticipants.map((participant) => (
              <tr key={participant.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{participant.studentId}</td>
                <td className="py-3 px-4" dir="auto">{participant.name}</td>
                <td className="py-3 px-4">{participant.email}</td>
                <td className="py-3 px-4">{participant.registrationDate}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${
                      participant.attended
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {participant.attended ? 'Present' : 'Not Marked'}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onAttendanceChange(participant.id)}
                      className={`p-1 rounded-full ${
                        participant.attended
                          ? 'text-red-600 hover:bg-red-50'
                          : 'text-green-600 hover:bg-green-50'
                      }`}
                      title={participant.attended ? 'Mark as absent' : 'Mark as present'}
                    >
                      {participant.attended ? (
                        <X className="w-5 h-5" />
                      ) : (
                        <Check className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={() => onEdit(participant)}
                      className="p-1 text-blue-600 hover:bg-blue-50 rounded-full"
                      title="Edit participant"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => onDelete(participant.id)}
                      className="p-1 text-red-600 hover:bg-red-50 rounded-full"
                      title="Remove participant"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}