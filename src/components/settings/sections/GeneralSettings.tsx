import React from 'react';
import { Globe, Sun, Bell } from 'lucide-react';
import SettingCard from '../ui/SettingCard';
import Toggle from '../ui/Toggle';

export default function GeneralSettings() {
  return (
    <div className="space-y-6">
      <SettingCard
        icon={Globe}
        title="Language Preferences"
        description="Choose your preferred language"
      >
        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="ar">العربية</option>
          <option value="en">English</option>
        </select>
      </SettingCard>

      <SettingCard
        icon={Sun}
        title="Theme Options"
        description="Choose your preferred theme"
      >
        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="light">Light Mode</option>
          <option value="dark">Dark Mode</option>
          <option value="system">System Default</option>
        </select>
      </SettingCard>

      <SettingCard
        icon={Bell}
        title="Notification Preferences"
        description="Manage your notification settings"
      >
        <div className="space-y-4">
          <Toggle
            label="Enable Email Notifications"
            onChange={() => {}}
          />
          <Toggle
            label="Enable SMS Notifications"
            onChange={() => {}}
          />
        </div>
      </SettingCard>
    </div>
  );
}