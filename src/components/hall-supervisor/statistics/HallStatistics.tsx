import React from 'react';
import { BarChart2, Calendar, Clock, Users } from 'lucide-react';

export default function HallStatistics() {
  const stats = [
    {
      title: 'Total Events',
      value: '156',
      change: '+12%',
      icon: Calendar,
    },
    {
      title: 'Pending Approvals',
      value: '23',
      change: '-5%',
      icon: Clock,
    },
    {
      title: 'Average Attendance',
      value: '85%',
      change: '+3%',
      icon: Users,
    },
    {
      title: 'Hall Utilization',
      value: '78%',
      change: '+8%',
      icon: BarChart2,
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Hall Statistics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className="text-green-500 text-sm">{stat.change}</span>
                  <span className="text-gray-500 text-sm ml-1">vs last month</span>
                </div>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add more detailed statistics sections as needed */}
    </div>
  );
}