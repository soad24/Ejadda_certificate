import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { Notification } from '../../types/hall';
import NotificationList from './NotificationList';

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'hall_reserved',
    title: 'Hall Reserved',
    message: 'Main Hall has been reserved for Web Development Workshop',
    timestamp: '2024-03-15T09:30:00Z',
    read: false,
    eventId: 1,
  },
  {
    id: '2',
    type: 'hall_rejected',
    title: 'Hall Request Rejected',
    message: 'Hall request for AI Seminar was rejected due to capacity constraints',
    timestamp: '2024-03-15T08:45:00Z',
    read: true,
    eventId: 2,
  },
];

export default function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAsRead = (notificationId: string) => {
    setNotifications(notifications.map(n =>
      n.id === notificationId ? { ...n, read: true } : n
    ));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50">
          <NotificationList
            notifications={notifications}
            onMarkAsRead={handleMarkAsRead}
            onMarkAllAsRead={handleMarkAllAsRead}
            onClose={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
}