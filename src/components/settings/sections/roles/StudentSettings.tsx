import React from 'react';
import { Bell, Award, Calendar } from 'lucide-react';
import SettingCard from '../../ui/SettingCard';
import Toggle from '../../ui/Toggle';

export default function StudentSettings() {
  return (
    <div className="space-y-6">
      <SettingCard
        icon={Bell}
        title="Notification Preferences"
        description="Configure your notification settings"
      >
        <div className="space-y-4">
          <Toggle
            label="Event Reminders"
            onChange={() => {}}
            defaultChecked
          />
          <Toggle
            label="Achievement Notifications"
            onChange={() => {}}
            defaultChecked
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reminder Time
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="15">15 minutes before</option>
              <option value="30">30 minutes before</option>
              <option value="60">1 hour before</option>
            </select>
          </div>
        </div>
      </SettingCard>

      <SettingCard
        icon={Award}
        title="Achievement Display"
        description="Configure how your achievements are displayed"
      >
        <div className="space-y-4">
          <Toggle
            label="Show Points"
            onChange={() => {}}
            defaultChecked
          />
          <Toggle
            label="Show Badges"
            onChange={() => {}}
            defaultChecked
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Achievement Privacy
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>
      </SettingCard>

      <SettingCard
        icon={Calendar}
        title="Calendar Integration"
        description="Configure calendar settings"
      >
        <div className="space-y-4">
          <Toggle
            label="Sync with Device Calendar"
            onChange={() => {}}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Calendar View
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="month">Month</option>
              <option value="week">Week</option>
              <option value="agenda">Agenda</option>
            </select>
          </div>
        </div>
      </SettingCard>
    </div>
  );
}