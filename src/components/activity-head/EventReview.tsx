import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, User, Globe, Users, CheckCircle, XCircle, Upload, FileText, X } from 'lucide-react';
import EventDetails from './EventDetails';

const mockEvent = {
  id: 1,
  title: 'Web Development Workshop',
  description: 'A comprehensive workshop covering modern web development practices.',
  date: '2024-03-20',
  time: '10:00 AM',
  duration: '3 hours',
  location: 'Room 101',
  requiredBy: 'Dr. Ahmed Ali',
  presenter: 'Dr. Ahmed Ali',
  language: 'Arabic',
  participants: 45,
  maxParticipants: 50,
  objectives: [
    'Understand modern web development frameworks',
    'Learn best practices in frontend development',
    'Practice building responsive web applications'
  ],
  targetAudience: 'Computer Science students',
  type: 'Workshop',
  status: 'pending_department'
};

export default function EventReview() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [comments, setComments] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleApprove = () => {
    // Handle event approval with attachments
    console.log('Approving with attachments:', attachments);
    navigate('/dashboard/activity-head');
  };

  const handleReject = () => {
    if (!comments) {
      alert('Please provide a reason for rejection');
      return;
    }
    // Handle event rejection with attachments
    console.log('Rejecting with attachments:', attachments);
    navigate('/dashboard/activity-head');
  };

  const handleAttachmentAdd = (files: FileList | null) => {
    if (files) {
      setAttachments(prev => [...prev, ...Array.from(files)]);
    }
  };

  const handleAttachmentRemove = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Event Review</h1>
        <div className="flex space-x-3">
          <button
            onClick={() => navigate('/dashboard/activity-head')}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Back
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">{mockEvent.title}</h2>
          
          <EventDetails event={mockEvent} />
          
          <div className="mt-6 border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Review Details</h3>
            
            <div className="space-y-6">
              {/* Attachments Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attachments
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <div className="flex items-center justify-center">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <Upload className="w-6 h-6 text-gray-400" />
                      <span className="text-blue-600 hover:text-blue-700">
                        Add attachments
                      </span>
                      <input
                        type="file"
                        multiple
                        className="hidden"
                        onChange={(e) => handleAttachmentAdd(e.target.files)}
                      />
                    </label>
                  </div>
                  
                  {attachments.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {attachments.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                        >
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{file.name}</span>
                          </div>
                          <button
                            onClick={() => handleAttachmentRemove(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Comments Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comments
                </label>
                <textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Add your comments or feedback..."
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={handleReject}
                className="flex items-center space-x-2 px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50"
              >
                <XCircle className="w-5 h-5" />
                <span>Reject</span>
              </button>
              <button
                onClick={handleApprove}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Approve</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}