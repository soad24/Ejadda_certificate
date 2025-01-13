import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, Clock, BarChart2 } from 'lucide-react';

export default function HallNavbar() {
  return (
    <nav className="bg-white shadow-sm mb-6">
      <div className="flex space-x-4 p-4">
        <NavLink
          to="/dashboard/hall-supervisor/events"
          className={({ isActive }) =>
            `flex items-center space-x-2 px-4 py-2 rounded-lg ${
              isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Calendar className="w-5 h-5" />
          <span>All Events</span>
        </NavLink>
        <NavLink
          to="/dashboard/hall-supervisor/pending"
          className={({ isActive }) =>
            `flex items-center space-x-2 px-4 py-2 rounded-lg ${
              isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Clock className="w-5 h-5" />
          <span>Pending Events</span>
        </NavLink>
        <NavLink
          to="/dashboard/hall-supervisor/statistics"
          className={({ isActive }) =>
            `flex items-center space-x-2 px-4 py-2 rounded-lg ${
              isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <BarChart2 className="w-5 h-5" />
          <span>Statistics</span>
        </NavLink>
      </div>
    </nav>
  );
}