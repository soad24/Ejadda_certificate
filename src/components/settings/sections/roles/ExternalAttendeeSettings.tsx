import React from 'react';
import { Bell, Calendar, User } from 'lucide-react';
import SettingCard from '../../ui/SettingCard';
import Toggle from '../../ui/Toggle';

export default function ExternalAttendeeSettings() {
  return (
    <div className="space-y-6">
      <SettingCard
        icon={Bell}
        title="Notification Settings"
        description="Configure notification preferences"
      >
        <div className="space-y-4">
          <Toggle
            label="Event Reminders"
            onChange={() => {}}
            defaultChecked
          />
          <Toggle
            label="Registration Confirmations"
            onChange={() => {}}
            defaultChecked
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notification Method
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="email">Email</option>
              <option value="sms">SMS</option>
              <option value="both">Both</option>
            </select>
          </div>
        </div>
      </SettingCard>

      <SettingCard
        icon={Calendar}
        title="Event Preferences"
        description="Configure event settings"
      >
        <div className="space-y-4">
          <Toggle
            label="Show Public Events Only"
            onChange={() => {}}
            defaultChecked
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Categories
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="all">All Categories</option>
              <option value="academic">Academic Only</option>
              <option value="cultural">Cultural Only</option>
            </select>
          </div>
        </div>
      </SettingCard>

      <SettingCard
        icon={User}
        title="Profile Settings"
        description="Configure your profile settings"
      >
        <div className="space-y-4">
          <Toggle
            label="Public Profile"
            onChange={() => {}}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Language Preference
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </SettingCard>
    </div>
  );
}