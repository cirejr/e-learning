export type Course = {
  id: string | number;
  title: string;
  description: string;
  url: string;
  code: string;
  start_date: Date;
  end_date: Date;
  teacher_id: string;
  program_id: string;
  category: string;
  thumbnail_url: string;
  profiles: { last_name: string; first_name: string; avatar_url: string };
  module: Module[];
  duration: string;
  enrollments: string[];
};

export type Module = {
  id: string;
  title: string;
  content: string;
  course_id: number;
  created_at: string;
  updated_at: string;
  order_number: number;
};
