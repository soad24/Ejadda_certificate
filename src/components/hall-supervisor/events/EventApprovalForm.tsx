import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';

interface EventApprovalFormProps {
  onApprove: (data: { reason: string; attachments: File[] }) => void;
  onReject: (data: { reason: string; attachments: File[] }) => void;
  onPostpone: (data: { reason: string; newDate: string; attachments: File[] }) => void;
  onClose: () => void;
}

export default function EventApprovalForm({ onApprove, onReject, onPostpone, onClose }: EventApprovalFormProps) {
  const [action, setAction] = useState<'approve' | 'reject' | 'postpone'>('approve');
  const [reason, setReason] = useState('');
  const [newDate, setNewDate] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { reason, attachments, newDate };
    
    switch (action) {
      case 'approve':
        onApprove(data);
        break;
      case 'reject':
        onReject(data);
        break;
      case 'postpone':
        onPostpone(data);
        break;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Event Action</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            {(['approve', 'reject', 'postpone'] as const).map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="radio"
                  checked={action === type}
                  onChange={() => setAction(type)}
                  className="text-blue-600"
                />
                <span className="capitalize">{type}</span>
              </label>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reason
            </label>
            <textarea
              required
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
            />
          </div>

          {action === 'postpone' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Date
              </label>
              <input
                type="date"
                required
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Attachments (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
              <input
                type="file"
                multiple
                onChange={(e) => setAttachments(Array.from(e.target.files || []))}
                className="hidden"
                id="attachments"
              />
              <label
                htmlFor="attachments"
                className="flex flex-col items-center cursor-pointer"
              >
                <Upload className="w-8 h-8 text-gray-400" />
                <span className="mt-2 text-sm text-gray-600">
                  Click to upload files
                </span>
              </label>
            </div>
            {attachments.length > 0 && (
              <ul className="mt-2 space-y-1">
                {attachments.map((file, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    {file.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}