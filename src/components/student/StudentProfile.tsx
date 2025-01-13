import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import RegisteredEvents from './RegisteredEvents';
import StudentTranscript from './StudentTranscript';
import EjaadaCertificate from './EjaadaCertificate';
import { Student } from '../../types/student';
import { isEligibleForEjaadaCertificate, calculateProgress, EJAADA_CERTIFICATE_THRESHOLD } from '../../utils/certificate';

interface StudentProfileProps {
  student: Student;
}

export default function StudentProfile({ student }: StudentProfileProps) {
  const isEligible = isEligibleForEjaadaCertificate(student);
  const progress = calculateProgress(student.totalPoints);

  return (
    <div className="space-y-6">
      {/* Student Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl">
            {student.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{student.name}</h1>
            <p className="text-gray-600">{student.department}</p>
            <p className="text-gray-500">Student ID: {student.studentId}</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Progress to Ejaada Certificate</span>
            <span className="text-sm font-medium text-blue-600">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {isEligible
              ? 'Congratulations! You are eligible for the Ejaada Certificate.'
              : `${EJAADA_CERTIFICATE_THRESHOLD - student.totalPoints} more points needed for the Ejaada Certificate.`}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="events" className="w-full">
        <TabsList>
          <TabsTrigger value="events">Registered Events</TabsTrigger>
          <TabsTrigger value="transcript">Transcript</TabsTrigger>
          {isEligible && <TabsTrigger value="certificate">Ejaada Certificate</TabsTrigger>}
        </TabsList>

        <TabsContent value="events">
          <RegisteredEvents events={student.transcript.events} />
        </TabsContent>

        <TabsContent value="transcript">
          <StudentTranscript transcript={student.transcript} />
        </TabsContent>

        {isEligible && (
          <TabsContent value="certificate">
            <EjaadaCertificate student={student} />
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}