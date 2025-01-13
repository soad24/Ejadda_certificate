import React from 'react';
import { Search, Filter, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Students() {
  const navigate = useNavigate();
  
  const students = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@university.edu',
      events: 12,
      points: 240,
      status: 'active',
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.c@university.edu',
      events: 8,
      points: 160,
      status: 'active',
    },
    {
      id: 3,
      name: 'Emma Davis',
      email: 'emma.d@university.edu',
      events: 15,
      points: 300,
      status: 'active',
    },
  ];

  const handleViewProfile = (studentId: number) => {
    navigate(`/dashboard/students/${studentId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Students</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Student
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search students..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full sm:w-64"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Email</th>
                  <th className="text-left py-3 px-4">Events Attended</th>
                  <th className="text-left py-3 px-4">Points</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{student.name}</td>
                    <td className="py-3 px-4">{student.email}</td>
                    <td className="py-3 px-4">{student.events}</td>
                    <td className="py-3 px-4">{student.points}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {student.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleViewProfile(student.id)}
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View Profile</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}