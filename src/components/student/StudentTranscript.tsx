import React, { useRef } from 'react';
import { Download, Printer } from 'lucide-react';
import { StudentTranscript as TranscriptType } from '../../types/student';
import { format } from 'date-fns';
import { usePDF } from 'react-to-pdf';

interface StudentTranscriptProps {
  transcript: TranscriptType;
}

export default function StudentTranscript({ transcript }: StudentTranscriptProps) {
  const { toPDF, targetRef } = usePDF({filename: 'student-transcript.pdf'});

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Academic Transcript</h2>
        <div className="flex space-x-3">
          <button
            onClick={() => toPDF()}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Printer className="w-4 h-4" />
            <span>Print</span>
          </button>
        </div>
      </div>

      <div ref={targetRef} className="bg-white rounded-xl shadow-sm p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Summary</h3>
          <p className="text-gray-600">Total Points Earned: {transcript.totalPoints}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Event</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">Points</th>
                <th className="text-left py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {transcript.events.map((event) => (
                <tr key={event.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{event.title}</td>
                  <td className="py-3 px-4">
                    {format(new Date(event.date), 'PP')}
                  </td>
                  <td className="py-3 px-4">{event.type}</td>
                  <td className="py-3 px-4">{event.points}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-medium ${
                        event.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {event.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}