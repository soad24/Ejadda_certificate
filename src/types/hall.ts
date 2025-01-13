export interface Hall {
  id: string;
  name: string;
  capacity: number;
  availability: boolean;
  description?: string;
  features?: string[];
  location?: string;
}

export interface HallReservation {
  id: string;
  hallId: string;
  hallName: string;
  eventId: string;
  eventTitle: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'pending' | 'approved' | 'rejected' | 'postponed';
  requestedBy: string;
  department: string;
  notes?: string;
  conflicts?: string[];
  approvalNote?: string;
  rejectionReason?: string;
  postponeReason?: string;
  newDate?: string;
}

export interface HallStatistics {
  totalEvents: number;
  pendingApprovals: number;
  averageAttendance: number;
  hallUtilization: number;
  monthlyTrend: {
    month: string;
    events: number;
  }[];
}