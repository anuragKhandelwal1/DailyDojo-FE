import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-habit-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './habit-create.component.html',
  styleUrl: './habit-create.component.scss'
})
export class HabitCreateComponent {
  habitForm: FormGroup;

  frequencies = ['daily', 'weekly', 'monthly']; // for select options

  constructor(private fb: FormBuilder, private habitService: HabitService) {
    this.habitForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      frequency: ['daily', Validators.required] // default to daily
    });
  }

  onSubmit() {
    if (this.habitForm.valid) {
      this.habitService.createHabit(this.habitForm.value).subscribe({
        next: () => {
          alert('Habit created!');
          this.habitForm.reset({ frequency: 'daily' });
        },
        error: (err) => console.error('Failed to create habit', err),
      });
    }
  }
}
