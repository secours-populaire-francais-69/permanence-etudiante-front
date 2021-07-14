export interface Event {
  id: number;
  startAt: string;
  endAt: string;
  maxPeople: number;
  title: string;
  comment: string;
  isFree: boolean;
  isClosed: boolean;
  createdAt?: string;
  updatedAt?: string;
}
