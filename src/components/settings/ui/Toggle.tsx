import React from 'react';

interface ToggleProps {
  label: string;
  onChange: (checked: boolean) => void;
  defaultChecked?: boolean;
}

export default function Toggle({ label, onChange, defaultChecked = false }: ToggleProps) {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          defaultChecked={defaultChecked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div className="w-10 h-6 bg-gray-200 rounded-full shadow-inner"></div>
        <div className="dot absolute w-4 h-4 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
      </div>
      <div className="ml-3 text-gray-700 font-medium">{label}</div>
    </label>
  );
}