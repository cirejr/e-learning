export type User = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  status: string;
  role: 'admin' | 'teacher' | 'student';
  password: string;
  createdAt: string;
  updatedAt: string;
};
