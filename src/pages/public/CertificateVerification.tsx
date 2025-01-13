import React, { useState } from 'react';
import { Search, CheckCircle, XCircle } from 'lucide-react';

interface VerificationResult {
  isValid: boolean;
  certificate?: {
    id: string;
    participantName: string;
    eventTitle: string;
    issueDate: string;
    type: string;
  };
}

export default function CertificateVerification() {
  const [certificateId, setCertificateId] = useState('');
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock verification result
    if (certificateId === 'CERT123') {
      setResult({
        isValid: true,
        certificate: {
          id: 'CERT123',
          participantName: 'Sarah Johnson',
          eventTitle: 'Web Development Workshop',
          issueDate: '2024-03-15',
          type: 'Workshop Completion',
        },
      });
    } else {
      setResult({ isValid: false });
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Verify Certificate</h1>
        <p className="mt-2 text-gray-600">
          Enter the certificate ID to verify its authenticity
        </p>
      </div>

      <form onSubmit={handleVerify} className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Enter certificate ID..."
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? 'Verifying...' : 'Verify Certificate'}
        </button>
      </form>

      {result && (
        <div className={`p-6 rounded-lg border ${
          result.isValid ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
        }`}>
          <div className="flex items-start">
            {result.isValid ? (
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            ) : (
              <XCircle className="w-6 h-6 text-red-600 mt-1" />
            )}
            <div className="ml-3">
              <h3 className={`text-lg font-semibold ${
                result.isValid ? 'text-green-800' : 'text-red-800'
              }`}>
                {result.isValid ? 'Valid Certificate' : 'Invalid Certificate'}
              </h3>
              {result.isValid && result.certificate ? (
                <div className="mt-2 space-y-2 text-sm text-gray-600">
                  <p><strong>Participant:</strong> {result.certificate.participantName}</p>
                  <p><strong>Event:</strong> {result.certificate.eventTitle}</p>
                  <p><strong>Type:</strong> {result.certificate.type}</p>
                  <p><strong>Issue Date:</strong> {result.certificate.issueDate}</p>
                </div>
              ) : (
                <p className="mt-2 text-sm text-red-600">
                  The certificate ID you provided could not be found in our system.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}