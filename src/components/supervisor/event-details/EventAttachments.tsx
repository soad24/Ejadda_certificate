import React from 'react';
import { FileText, X } from 'lucide-react';

interface EventAttachmentsProps {
  attachments: File[];
  onAttachmentAdd: (files: File[]) => void;
  onAttachmentRemove: (index: number) => void;
}

export default function EventAttachments({
  attachments,
  onAttachmentAdd,
  onAttachmentRemove,
}: EventAttachmentsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Attachments</h3>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <div className="flex items-center justify-center">
          <label className="flex items-center space-x-2 cursor-pointer">
            <FileText className="w-6 h-6 text-gray-400" />
            <span className="text-blue-600 hover:text-blue-700">
              Add attachments
            </span>
            <input
              type="file"
              multiple
              className="hidden"
              onChange={(e) => {
                if (e.target.files) {
                  onAttachmentAdd(Array.from(e.target.files));
                }
              }}
            />
          </label>
        </div>
        
        {attachments.length > 0 && (
          <div className="mt-4 space-y-2">
            {attachments.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 p-2 rounded"
              >
                <span className="text-sm text-gray-600">{file.name}</span>
                <button
                  type="button"
                  onClick={() => onAttachmentRemove(index)}
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
  );
}