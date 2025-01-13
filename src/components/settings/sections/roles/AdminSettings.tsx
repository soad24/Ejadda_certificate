import React from 'react';
import { Settings, Users, Shield } from 'lucide-react';
import SettingCard from '../../ui/SettingCard';
import Toggle from '../../ui/Toggle';

export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <SettingCard
        icon={Settings}
        title="System Configuration"
        description="Configure system-wide settings"
      >
        <div className="space-y-4">
          <Toggle
            label="Enable Maintenance Mode"
            onChange={() => {}}
          />
          <Toggle
            label="Debug Mode"
            onChange={() => {}}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              System Language
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </SettingCard>

      <SettingCard
        icon={Users}
        title="User Management"
        description="Configure user access and permissions"
      >
        <div className="space-y-4">
          <Toggle
            label="Allow User Registration"
            onChange={() => {}}
            defaultChecked
          />
          <Toggle
            label="Email Verification Required"
            onChange={() => {}}
            defaultChecked
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Default User Role
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="student">Student</option>
              <option value="external">External</option>
            </select>
          </div>
        </div>
      </SettingCard>

      <SettingCard
        icon={Shield}
        title="Security Settings"
        description="Configure security preferences"
      >
        <div className="space-y-4">
          <Toggle
            label="Two-Factor Authentication"
            onChange={() => {}}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Session Timeout
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="120">2 hours</option>
            </select>
          </div>
        </div>
      </SettingCard>
    </div>
  );
}