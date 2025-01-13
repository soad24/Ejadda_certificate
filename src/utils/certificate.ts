import { Student } from '../types/student';

export const EJAADA_CERTIFICATE_THRESHOLD = 200;

export function isEligibleForEjaadaCertificate(student: Student): boolean {
  return student.totalPoints >= EJAADA_CERTIFICATE_THRESHOLD;
}

export function calculateProgress(points: number): number {
  return Math.min((points / EJAADA_CERTIFICATE_THRESHOLD) * 100, 100);
}