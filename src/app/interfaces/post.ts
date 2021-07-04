export interface Post {
  id?: number;
  content: string;
  title: string;
  isForVolunteers: boolean;
  userId?: number;
  createdAt?: string;
  updatedAt?: string;
}
