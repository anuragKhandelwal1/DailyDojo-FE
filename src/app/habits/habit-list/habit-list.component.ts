import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Habit } from '../../models/habit.model';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-habit-list',
  imports: [CommonModule],
  templateUrl: './habit-list.component.html',
  styleUrl: './habit-list.component.scss'
})
export class HabitListComponent {
  habits: Habit[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private habitService: HabitService) { }

  ngOnInit(): void {
    this.loadHabits();
  }

  loadHabits() {
    this.isLoading = true;

    this.habitService.getHabits().subscribe({
      next: (data) => {
        this.habits = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load habits', err)
        this.isLoading = false;

      }
    });
  }

  deleteHabit(id: string) {
    this.habitService.deleteHabit(id).subscribe({
      next: () => this.loadHabits(),
      error: (err) => console.error('Failed to delete habit', err),
    });
  }
}
