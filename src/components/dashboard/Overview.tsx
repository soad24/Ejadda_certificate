import React from 'react';
import { Calendar, Users, Award, TrendingUp, Clock, MapPin } from 'lucide-react';

export default function Overview() {
  // Mock data for events
  const events = [
    {
      id: 1,
      title: 'Web Development Workshop',
      date: '2024-03-20',
      time: '10:00 AM',
      location: 'Adam Hall',
      organizer: 'Dr. Ahmed Ali',
      participants: 45,
      maxParticipants: 50,
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'AI & Machine Learning Seminar',
      date: '2024-03-22',
      time: '2:00 PM',
      location: 'Al-ibtikar Hall',
      organizer: 'Prof. Sarah Anderson',
      participants: 120,
      maxParticipants: 150,
      status: 'upcoming'
    }
  ];

  const stats = [
    {
      title: 'Total Events',
      value: '156',
      change: '+12%',
      icon: Calendar,
      color: 'bg-utas-blue-500'
    },
    {
      title: 'Active Participants',
      value: '2,345',
      change: '+8%',
      icon: Users,
      color: 'bg-utas-orange-500'
    },
    {
      title: 'Achievements',
      value: '867',
      change: '+24%',
      icon: Award,
      color: 'bg-utas-blue-500'
    },
    {
      title: 'Success Rate',
      value: '78%',
      change: '+5%',
      icon: TrendingUp,
      color: 'bg-utas-orange-500'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className="text-green-500 text-sm">{stat.change}</span>
                  <span className="text-gray-500 text-sm ml-1">vs last month</span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-utas-blue-100 text-utas-blue-800">
                    {event.status}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{event.participants} / {event.maxParticipants} participants</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Organized by:</span>
                    <span className="text-sm font-medium text-gray-900">{event.organizer}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}