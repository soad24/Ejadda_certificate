import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import EventSupervisorSettings from './roles/EventSupervisorSettings';
import HallSupervisorSettings from './roles/HallSupervisorSettings';
import ActivityHeadSettings from './roles/ActivityHeadSettings';
import AdminSettings from './roles/AdminSettings';
import StudentSettings from './roles/StudentSettings';
import ExternalAttendeeSettings from './roles/ExternalAttendeeSettings';

export default function RoleSettings() {
  const { user } = useAuth();

  const getRoleComponent = () => {
    switch (user?.role) {
      case 'event_supervisor':
        return <EventSupervisorSettings />;
      case 'hall_supervisor':
        return <HallSupervisorSettings />;
      case 'activity_head':
        return <ActivityHeadSettings />;
      case 'admin':
        return <AdminSettings />;
      case 'student':
        return <StudentSettings />;
      case 'external':
        return <ExternalAttendeeSettings />;
      default:
        return <div>No role-specific settings available</div>;
    }
  };

  return (
    <div className="space-y-6">
      {getRoleComponent()}
    </div>
  );
}