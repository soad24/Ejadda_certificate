import React from 'react';
import { Users, UserCheck, UserX } from 'lucide-react';
import { Student } from '../../../types/student';

interface StudentStatsProps {
  students: Student[];
}

export default function StudentStats({ students }: StudentStatsProps) {
  const totalStudents = students.length;
  const presentStudents = students.filter(s => s.attendance.present).length;
  const absentStudents = totalStudents - presentStudents;
  const attendanceRate = totalStudents ? Math.round((presentStudents / totalStudents) * 100) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-3">
          <Users className="w-8 h-8 text-blue-600" />
          <div>
            <p className="text-sm text-gray-600">Total Students</p>
            <p className="text-2xl font-bold">{totalStudents}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-3">
          <UserCheck className="w-8 h-8 text-green-600" />
          <div>
            <p className="text-sm text-gray-600">Present</p>
            <p className="text-2xl font-bold">{presentStudents}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-3">
          <UserX className="w-8 h-8 text-red-600" />
          <div>
            <p className="text-sm text-gray-600">Absent</p>
            <p className="text-2xl font-bold">{absentStudents}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="text-purple-600 font-bold">%</span>
          </div>
          <div>
            <p className="text-sm text-gray-600">Attendance Rate</p>
            <p className="text-2xl font-bold">{attendanceRate}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}