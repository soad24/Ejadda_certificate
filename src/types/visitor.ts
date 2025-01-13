export interface Visitor {
  civilId: string;
  firstName: string;
  secondName: string;
  tribe?: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
}

export interface VisitorCredentials {
  username: string; // Civil ID
  password: string; // Phone Number
}