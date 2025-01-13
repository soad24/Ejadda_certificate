import React, { useState, useRef, useEffect } from 'react';
import { Users, ChevronDown } from 'lucide-react';

interface EventParticipationProps {
  maxParticipants: string;
  participationType: string;
  targetAudience: string;
  genderRestriction: {
    male: boolean;
    female: boolean;
  };
  onMaxParticipantsChange: (value: string) => void;
  onParticipationTypeChange: (value: string) => void;
  onTargetAudienceChange: (value: string) => void;
  onGenderRestrictionChange: (gender: 'male' | 'female', value: boolean) => void;
}

const targetAudienceOptions = [
  { id: 'staff', label: 'Staff' },
  { id: 'students', label: 'Students' },
  { id: 'visitors', label: 'Visitors' }
];

export default function EventParticipation({
  maxParticipants,
  participationType,
  targetAudience,
  genderRestriction,
  onMaxParticipantsChange,
  onParticipationTypeChange,
  onTargetAudienceChange,
  onGenderRestrictionChange,
}: EventParticipationProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    targetAudience ? targetAudience.split(',') : []
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionToggle = (optionId: string) => {
    const updatedOptions = selectedOptions.includes(optionId)
      ? selectedOptions.filter(id => id !== optionId)
      : [...selectedOptions, optionId];
    
    setSelectedOptions(updatedOptions);
    onTargetAudienceChange(updatedOptions.join(','));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Participation Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Maximum Participants
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="number"
              min="1"
              required
              value={maxParticipants}
              onChange={(e) => onMaxParticipantsChange(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pre-registration Required
          </label>
          <select
            value={participationType}
            onChange={(e) => onParticipationTypeChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Audience
          </label>
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-left flex justify-between items-center focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <span className="text-gray-700">
                {selectedOptions.length > 0
                  ? selectedOptions
                      .map(
                        id => targetAudienceOptions.find(opt => opt.id === id)?.label
                      )
                      .join(', ')
                  : 'Select target audience'}
              </span>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                {targetAudienceOptions.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(option.id)}
                      onChange={() => handleOptionToggle(option.id)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender Selection
          </label>
          <div className="flex space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={genderRestriction.male}
                onChange={(e) => onGenderRestrictionChange('male', e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700">Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={genderRestriction.female}
                onChange={(e) => onGenderRestrictionChange('female', e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700">Female</span>
            </label>
          </div>
          {!genderRestriction.male && !genderRestriction.female && (
            <p className="text-sm text-gray-500 mt-1">
              If no gender is selected, the event will be open to all genders
            </p>
          )}
        </div>
      </div>
    </div>
  );
}