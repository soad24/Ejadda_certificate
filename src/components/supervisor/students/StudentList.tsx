import React, { useState } from 'react';
import { Search } from 'lucide-react';
import StudentTable from './StudentTable';
import StudentStats from './StudentStats';
import { Student } from '../../../types/student';

const initialStudents: Student[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    studentId: 'CS2024001',
    email: 'sarah.j@university.edu',
    department: 'Computer Science',
    attendance: {
      present: true,
      timestamp: new Date().toISOString(),
    }
  },
  {
    id: 2,
    name: 'Michael Chen',
    studentId: 'CS2024002',
    email: 'michael.c@university.edu',
    department: 'Computer Science',
    attendance: {
      present: false,
      timestamp: null,
    }
  },
];

export default function StudentList() {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAttendanceChange = (studentId: number) => {
    setStudents(students.map(student => {
      if (student.id === studentId) {
        return {
          ...student,
          attendance: {
            present: !student.attendance.present,
            timestamp: !student.attendance.present ? new Date().toISOString() : null,
          }
        };
      }
      return student;
    }));
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.studentId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <StudentStats students={students} />
      
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name or student ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <StudentTable
            students={filteredStudents}
            onAttendanceChange={handleAttendanceChange}
          />
        </div>
      </div>
    </div>
  );
}