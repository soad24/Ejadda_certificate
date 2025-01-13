import React, { useState } from 'react';
import { Award, Star, Trophy } from 'lucide-react';
import AchievementForm from './achievements/AchievementForm';

export default function Achievements() {
  const [showForm, setShowForm] = useState(false);
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      student: 'Sarah Johnson',
      title: 'Excellence in Leadership',
      description: 'Demonstrated exceptional leadership skills in organizing campus events',
      date: '2024-03-15',
      category: 'Leadership',
      points: 50,
      type: 'Certificate',
    },
    {
      id: 2,
      student: 'Michael Chen',
      title: 'Outstanding Workshop Participation',
      description: 'Active participation and contribution in technical workshops',
      date: '2024-03-14',
      category: 'Professional',
      points: 30,
      type: 'Badge',
    },
  ]);

  const handleSubmit = (data) => {
    const newAchievement = {
      id: achievements.length + 1,
      student: 'Current Student',
      ...data,
      points: 30,
      type: 'Certificate',
    };
    setAchievements([...achievements, newAchievement]);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Achievements</h1>
        <button 
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Achievement
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <Trophy className="w-8 h-8 mb-4" />
          <h3 className="text-2xl font-bold">1,234</h3>
          <p className="text-purple-100">Total Achievements</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <Star className="w-8 h-8 mb-4" />
          <h3 className="text-2xl font-bold">45,678</h3>
          <p className="text-blue-100">Total Points Awarded</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <Award className="w-8 h-8 mb-4" />
          <h3 className="text-2xl font-bold">567</h3>
          <p className="text-green-100">Certificates Issued</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Achievements</h2>
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">{achievement.title}</h3>
                    <p className="text-gray-600 mt-1">{achievement.description}</p>
                    <div className="flex items-center mt-2 space-x-4">
                      <span className="text-sm text-gray-500">
                        {achievement.date}
                      </span>
                      <span className="text-sm text-gray-500">
                        {achievement.points} points
                      </span>
                      <span className="text-sm text-gray-500">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    {achievement.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showForm && (
        <AchievementForm
          onSubmit={handleSubmit}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}