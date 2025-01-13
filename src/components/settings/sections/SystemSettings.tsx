import React from 'react';
import { Award, Layout, FileText } from 'lucide-react';
import SettingCard from '../ui/SettingCard';

export default function SystemSettings() {
  return (
    <div className="space-y-6">
      <SettingCard
        icon={Award}
        title="Point System Configuration"
        description="Configure point values for different event types"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Academic Events
            </label>
            <input
              type="number"
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Points for academic events"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Excellence Threshold
            </label>
            <input
              type="number"
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Points needed for excellence"
            />
          </div>
        </div>
      </SettingCard>

      <SettingCard
        icon={Layout}
        title="Event Categories"
        description="Manage event categories"
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="New category name"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Add
            </button>
          </div>
          <div className="space-y-2">
            {['Academic', 'Social', 'Cultural'].map((category) => (
              <div key={category} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span>{category}</span>
                <button className="text-red-600 hover:text-red-700">Delete</button>
              </div>
            ))}
          </div>
        </div>
      </SettingCard>

      <SettingCard
        icon={FileText}
        title="Certificate Templates"
        description="Manage certificate templates"
      >
        <div className="space-y-4">
          <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
            Upload New Template
          </button>
          <div className="space-y-2">
            {['Excellence', 'Participation', 'Achievement'].map((template) => (
              <div key={template} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span>{template} Certificate</span>
                <div className="space-x-2">
                  <button className="text-blue-600 hover:text-blue-700">Edit</button>
                  <button className="text-red-600 hover:text-red-700">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SettingCard>
    </div>
  );
}