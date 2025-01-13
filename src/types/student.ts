export interface StudentAttendance {
  present: boolean;
  timestamp: string | null;
}

export interface Student {
  id: number;
  name: string;
  studentId: string;
  email: string;
  department: string;
  attendance: StudentAttendance;
}