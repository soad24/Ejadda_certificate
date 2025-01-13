import React from 'react';
import { Calendar, Users, FileText } from 'lucide-react';
import SettingCard from '../../ui/SettingCard';
import Toggle from '../../ui/Toggle';

export default function EventSupervisorSettings() {
  return (
    <div className="space-y-6">
      <SettingCard
        icon={Calendar}
        title="Default Event Preferences"
        description="Configure default settings for new events"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Default Event Type
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="academic">Academic</option>
              <option value="cultural">Cultural</option>
              <option value="social">Social</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Default Duration
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="1">1 Hour</option>
              <option value="2">2 Hours</option>
              <option value="3">3 Hours</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Default Participation Type
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="in-person">حضوري</option>
              <option value="online">أونلاين</option>
            </select>
          </div>
        </div>
      </SettingCard>

      <SettingCard
        icon={Users}
        title="Attendance Management"
        description="Configure attendance tracking settings"
      >
        <div className="space-y-4">
          <Toggle
            label="Allow Manual Attendance Upload"
            onChange={() => {}}
          />
          <Toggle
            label="Enable Auto Attendance Verification"
            onChange={() => {}}
          />
        </div>
      </SettingCard>

      <SettingCard
        icon={FileText}
        title="Report Options"
        description="Configure report generation settings"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Default Report Format
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="pdf">PDF</option>
            <option value="excel">Excel</option>
          </select>
        </div>
      </SettingCard>
    </div>
  );
}