import React from 'react';
import { Download } from 'lucide-react';
import { Student } from '../../types/student';
import { format } from 'date-fns';
import { usePDF } from 'react-to-pdf';

interface EjaadaCertificateProps {
  student: Student;
}

export default function EjaadaCertificate({ student }: EjaadaCertificateProps) {
  const { toPDF, targetRef } = usePDF({filename: 'ejaada-certificate.pdf'});
  const issueDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Ejaada Certificate</h2>
        <button
          onClick={() => toPDF()}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Download className="w-4 h-4" />
          <span>Download Certificate</span>
        </button>
      </div>

      <div
        ref={targetRef}
        className="bg-white rounded-xl shadow-sm p-12 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <div className="border-8 border-double border-blue-200 p-8">
            <div className="text-4xl font-serif text-blue-600 mb-8">
              Ejaada Certificate
            </div>
            
            <div className="text-xl mb-6">This is to certify that</div>
            
            <div className="text-3xl font-bold mb-6">{student.name}</div>
            
            <div className="text-xl mb-8">
              has successfully completed the required activities and earned{' '}
              <span className="font-bold">{student.totalPoints} points</span> in
              various academic and extracurricular activities.
            </div>
            
            <div className="text-lg mb-12">
              Student ID: {student.studentId}
              <br />
              Department: {student.department}
              <br />
              Issue Date: {issueDate}
            </div>
            
            <div className="flex justify-center space-x-16">
              <div className="text-center">
                <div className="w-40 border-b border-gray-400 mb-2"></div>
                <div className="text-sm text-gray-600">University Seal</div>
              </div>
              <div className="text-center">
                <div className="w-40 border-b border-gray-400 mb-2"></div>
                <div className="text-sm text-gray-600">Dean's Signature</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}