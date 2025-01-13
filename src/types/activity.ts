export interface ActivityEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  requiredBy: string;
  presenter: string;
  language: string;
  participants: number;
  maxParticipants: number;
  objectives: string[];
  targetAudience: string;
  type: string;
  status: 'pending_department' | 'pending_halls' | 'approved' | 'rejected';
}

export interface ApprovalAction {
  eventId: number;
  approved: boolean;
  comments: string;
  approvedBy: string;
  approvedAt: string;
}