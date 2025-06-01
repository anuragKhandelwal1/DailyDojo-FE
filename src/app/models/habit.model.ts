export interface Habit {
  id?: string;
  title: string;
  description?: string;
  frequency: 'daily' | 'weekly' | 'monthly';
  createdAt?: string;
}