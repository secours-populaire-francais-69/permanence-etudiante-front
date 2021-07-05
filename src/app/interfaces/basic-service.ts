export interface BasicService {
  id: number;
  startAt: string;
  endAt: string;
  maxPeople: number;
  isClosed: boolean;
  createdAt?: string;
  updatedAt?: string;
}
