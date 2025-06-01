import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habit } from '../models/habit.model';
import { Observable } from 'rxjs';
import { HABITS_API } from '../../environments/api.constant';

@Injectable({ providedIn: 'root' })
export class HabitService {
    private apiUrl = HABITS_API;

  constructor(private http: HttpClient) {}

  getHabits(): Observable<Habit[]> {
    return this.http.get<Habit[]>(this.apiUrl);
  }

  createHabit(habit: Partial<Habit>): Observable<Habit> {
    return this.http.post<Habit>(this.apiUrl, habit);
  }

  deleteHabit(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
