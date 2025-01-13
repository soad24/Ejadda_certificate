import React from 'react';
import { DollarSign, CheckSquare } from 'lucide-react';
import SettingCard from '../../ui/SettingCard';
import Toggle from '../../ui/Toggle';

export default function ActivityHeadSettings() {
  return (
    <div className="space-y-6">
      <SettingCard
        icon={DollarSign}
        title="Financial Approvals"
        description="Configure financial approval settings"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Budget Threshold for Notifications
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <Toggle
            label="Allow Bulk Approvals"
            onChange={() => {}}
          />
        </div>
      </SettingCard>

      <SettingCard
        icon={CheckSquare}
        title="Review Preferences"
        description="Configure event review settings"
      >
        <div className="space-y-4">
          <Toggle
            label="Enable Event Requirement Checklists"
            onChange={() => {}}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Required Checklist Items
            </label>
            <div className="space-y-2">
              {['Venue', 'Budget', 'Materials', 'Staff'].map((item) => (
                <label key={item} className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </SettingCard>
    </div>
  );
}