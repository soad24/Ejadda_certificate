import React from 'react';
import { Check, X } from 'lucide-react';
import { Student } from '../../../types/student';
import { format } from 'date-fns';

interface StudentTableProps {
  students: Student[];
  onAttendanceChange: (studentId: number) => void;
}

export default function StudentTable({ students, onAttendanceChange }: StudentTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3 px-4">Student ID</th>
            <th className="text-left py-3 px-4">Name</th>
            <th className="text-left py-3 px-4">Department</th>
            <th className="text-left py-3 px-4">Attendance</th>
            <th className="text-left py-3 px-4">Time</th>
            <th className="text-left py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">{student.studentId}</td>
              <td className="py-3 px-4">{student.name}</td>
              <td className="py-3 px-4">{student.department}</td>
              <td className="py-3 px-4">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${
                    student.attendance.present
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {student.attendance.present ? 'Present' : 'Absent'}
                </span>
              </td>
              <td className="py-3 px-4">
                {student.attendance.timestamp 
                  ? format(new Date(student.attendance.timestamp), 'h:mm a')
                  : '-'}
              </td>
              <td className="py-3 px-4">
                <button
                  onClick={() => onAttendanceChange(student.id)}
                  className={`p-1 rounded-full ${
                    student.attendance.present
                      ? 'text-red-600 hover:bg-red-50'
                      : 'text-green-600 hover:bg-green-50'
                  }`}
                  title={student.attendance.present ? 'Mark as absent' : 'Mark as present'}
                >
                  {student.attendance.present ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Check className="w-5 h-5" />
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}