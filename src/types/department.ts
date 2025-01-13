export interface Department {
  id: string;
  name: string;
}

export interface Staff {
  id: string;
  name: string;
  departmentId: string;
  position: string;
}

export const departments: Department[] = [
  { id: 'it', name: 'IT Department' },
  { id: 'business', name: 'Business Department' },
  { id: 'engineering', name: 'Engineering Department' },
  { id: 'science', name: 'Science Department' },
  { id: 'arts', name: 'Arts & Humanities Department' },
  { id: 'medicine', name: 'Medical Department' },
  { id: 'law', name: 'Law Department' }
];

export const staff: Staff[] = [
  { id: 'staff1', name: 'Dr. Ahmed Ali', departmentId: 'it', position: 'Head of Department' },
  { id: 'staff2', name: 'Prof. Sarah Anderson', departmentId: 'it', position: 'Senior Lecturer' },
  { id: 'staff3', name: 'Dr. Mohammed Hassan', departmentId: 'business', position: 'Head of Department' },
  { id: 'staff4', name: 'Dr. Emily Brown', departmentId: 'business', position: 'Associate Professor' },
  { id: 'staff5', name: 'Prof. Ali Mahmoud', departmentId: 'engineering', position: 'Head of Department' },
  { id: 'staff6', name: 'Dr. John Smith', departmentId: 'science', position: 'Head of Department' },
  { id: 'staff7', name: 'Dr. Fatima Al-Said', departmentId: 'arts', position: 'Head of Department' },
  { id: 'staff8', name: 'Prof. David Wilson', departmentId: 'medicine', position: 'Head of Department' },
  { id: 'staff9', name: 'Dr. Layla Ahmed', departmentId: 'law', position: 'Head of Department' }
];