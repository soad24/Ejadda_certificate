import React from 'react';
import { Bell, Calendar, Clock } from 'lucide-react';
import SettingCard from '../../ui/SettingCard';
import Toggle from '../../ui/Toggle';

export default function HallSupervisorSettings() {
  return (
    <div className="space-y-6">
      <SettingCard
        icon={Bell}
        title="Booking Preferences"
        description="Configure hall booking settings"
      >
        <div className="space-y-4">
          <Toggle
            label="Notification on New Booking Requests"
            onChange={() => {}}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Default Review Time
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="12">12 Hours</option>
              <option value="24">24 Hours</option>
              <option value="48">48 Hours</option>
            </select>
          </div>
        </div>
      </SettingCard>

      <SettingCard
        icon={Calendar}
        title="Calendar Integration"
        description="Configure calendar sync settings"
      >
        <div className="space-y-4">
          <Toggle
            label="Sync with Google Calendar"
            onChange={() => {}}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sync Frequency
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="realtime">Real-time</option>
              <option value="hourly">Hourly</option>
              <option value="daily">Daily</option>
            </select>
          </div>
        </div>
      </SettingCard>
    </div>
  );
}