import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import {
  Layout,
  Home,
  Calendar,
  Users,
  Award,
  LogOut,
  Menu,
  X,
  Building2,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import UtasLogo from '../components/common/UtasLogo';
import Overview from '../components/dashboard/Overview';
import Events from '../components/dashboard/Events';
import Students from '../components/dashboard/Students';
import Achievements from '../components/dashboard/Achievements';
import StudentProfile from '../components/student/StudentProfile';
import EventSupervisor from './EventSupervisor';
import HallSupervisor from './HallSupervisor';
import ActivityHead from './ActivityHead';
import NotificationCenter from '../components/notifications/NotificationCenter';
import { mockStudent } from '../data/mockStudent';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b bg-gradient-to-r from-utas-orange-500 to-utas-blue-500">
          <UtasLogo />
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-white hover:text-gray-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <Link
            to=""
            className="flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-utas-blue-50 hover:text-utas-blue-700"
          >
            <Home className="w-5 h-5" />
            <span>Overview</span>
          </Link>
          <Link
            to="events"
            className="flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-utas-blue-50 hover:text-utas-blue-700"
          >
            <Calendar className="w-5 h-5" />
            <span>Events</span>
          </Link>
          <Link
            to="supervisor"
            className="flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-utas-blue-50 hover:text-utas-blue-700"
          >
            <Calendar className="w-5 h-5" />
            <span>Event Supervisor</span>
          </Link>
          <Link
            to="activity-head"
            className="flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-utas-blue-50 hover:text-utas-blue-700"
          >
            <Award className="w-5 h-5" />
            <span>Activity Head</span>
          </Link>
          <Link
            to="hall-supervisor"
            className="flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-utas-blue-50 hover:text-utas-blue-700"
          >
            <Building2 className="w-5 h-5" />
            <span>Hall Supervisor</span>
          </Link>
          <Link
            to="students"
            className="flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-utas-blue-50 hover:text-utas-blue-700"
          >
            <Users className="w-5 h-5" />
            <span>Students</span>
          </Link>
          <Link
            to="achievements"
            className="flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-utas-blue-50 hover:text-utas-blue-700"
          >
            <Award className="w-5 h-5" />
            <span>Achievements</span>
          </Link>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 px-4 py-2 w-full text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-700"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 min-h-screen">
        {/* Top Bar */}
        <div className="bg-white shadow-sm">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-4">
              <NotificationCenter />
              <div className="w-8 h-8 rounded-full bg-utas-blue-500 flex items-center justify-center text-white">
                A
              </div>
              <span className="text-sm font-medium">Admin User</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <Routes>
            <Route path="" element={<Overview />} />
            <Route path="events" element={<Events />} />
            <Route path="supervisor/*" element={<EventSupervisor />} />
            <Route path="activity-head/*" element={<ActivityHead />} />
            <Route path="hall-supervisor/*" element={<HallSupervisor />} />
            <Route path="students" element={<Students />} />
            <Route path="students/:id" element={<StudentProfile student={mockStudent} />} />
            <Route path="achievements" element={<Achievements />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}