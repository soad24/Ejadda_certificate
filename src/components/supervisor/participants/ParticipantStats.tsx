import React from 'react';
import { Users, UserCheck, Clock } from 'lucide-react';
import { EventParticipant } from '../../../types/event';

interface ParticipantStatsProps {
  participants: EventParticipant[];
}

export default function ParticipantStats({ participants }: ParticipantStatsProps) {
  const totalParticipants = participants.length;
  const presentParticipants = participants.filter((p) => p.attended).length;
  const attendanceRate = totalParticipants
    ? Math.round((presentParticipants / totalParticipants) * 100)
    : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-3">
          <Users className="w-8 h-8 text-blue-600" />
          <div>
            <p className="text-sm text-gray-600">Total Participants</p>
            <p className="text-2xl font-bold">{totalParticipants}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-3">
          <UserCheck className="w-8 h-8 text-green-600" />
          <div>
            <p className="text-sm text-gray-600">Present</p>
            <p className="text-2xl font-bold">{presentParticipants}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-3">
          <Clock className="w-8 h-8 text-purple-600" />
          <div>
            <p className="text-sm text-gray-600">Attendance Rate</p>
            <p className="text-2xl font-bold">{attendanceRate}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}