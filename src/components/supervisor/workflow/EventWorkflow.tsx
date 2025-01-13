import React from 'react';
import EventWorkflowHeader from './EventWorkflowHeader';
import WorkflowTimeline from './WorkflowTimeline';

// Mock data for demonstration
const mockEvent = {
  title: "AI & Machine Learning Seminar",
  date: "2024-03-25",
  time: "2:00 PM (3 hours)",
  location: "Main Hall",
  requiredBy: "AI Research Center",
  presenter: "Prof. Sarah Anderson",
  language: "Arabic & English",
  createdAt: "2024-03-15 09:30 AM",
};

const mockSteps = [
  {
    title: "Event Created",
    status: "completed" as const,
    date: "March 15, 2024 09:30 AM",
    actor: "John Smith (Event Supervisor)",
    comments: "Initial event submission"
  },
  {
    title: "Department Head Approval",
    status: "completed" as const,
    date: "March 16, 2024 02:15 PM",
    actor: "Dr. Michael Brown",
    comments: "Approved. Event aligns with department objectives."
  },
  {
    title: "Hall Reservation",
    status: "current" as const,
    date: "Pending",
    actor: "Awaiting processing",
  }
];

export default function EventWorkflow() {
  return (
    <div className="space-y-6">
      <EventWorkflowHeader event={mockEvent} />
      <WorkflowTimeline steps={mockSteps} />
    </div>
  );
}