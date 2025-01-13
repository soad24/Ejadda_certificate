import React from 'react';
import { HelpCircle, MessageCircle, Flag } from 'lucide-react';
import SettingCard from '../ui/SettingCard';

export default function SupportSettings() {
  return (
    <div className="space-y-6">
      <SettingCard
        icon={HelpCircle}
        title="Help and Tutorials"
        description="Access user guides and documentation"
      >
        <div className="space-y-2">
          {['Getting Started', 'Event Management', 'User Roles', 'Reports'].map((guide) => (
            <button
              key={guide}
              className="w-full px-4 py-2 text-left border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              {guide} Guide
            </button>
          ))}
        </div>
      </SettingCard>

      <SettingCard
        icon={MessageCircle}
        title="Contact Support"
        description="Get help from our support team"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter subject"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe your issue"
            ></textarea>
          </div>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </div>
      </SettingCard>

      <SettingCard
        icon={Flag}
        title="Report a Problem"
        description="Submit bug reports or suggestions"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Issue Type
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="improvement">Improvement Suggestion</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe the issue or suggestion"
            ></textarea>
          </div>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Submit Report
          </button>
        </div>
      </SettingCard>
    </div>
  );
}