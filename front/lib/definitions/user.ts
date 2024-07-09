export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  status: string;
  role: 'admin' | 'teacher' | 'student';
  password: string;
  createdAt: string;
  updatedAt: string;
};
