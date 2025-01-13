import React from 'react';
import { Download, Upload, Save } from 'lucide-react';
import SettingCard from '../ui/SettingCard';
import Toggle from '../ui/Toggle';

export default function DataSettings() {
  return (
    <div className="space-y-6">
      <SettingCard
        icon={Download}
        title="Export/Import Options"
        description="Manage your data exports and imports"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Export Data</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-2">
              <option value="csv">CSV Format</option>
              <option value="excel">Excel Format</option>
              <option value="pdf">PDF Format</option>
            </select>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Export Data
            </button>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Import Data</label>
            <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Upload File
            </button>
          </div>
        </div>
      </SettingCard>

      <SettingCard
        icon={Save}
        title="Backup Settings"
        description="Configure automatic backup settings"
      >
        <div className="space-y-4">
          <Toggle
            label="Enable Auto-Backup"
            onChange={() => {}}
          />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Backup Frequency
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Retention Period
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="30">30 Days</option>
              <option value="60">60 Days</option>
              <option value="90">90 Days</option>
            </select>
          </div>
        </div>
      </SettingCard>
    </div>
  );
}