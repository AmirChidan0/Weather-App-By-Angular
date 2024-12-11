import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  title: string = '';
  description: string = '';
  priority: 'low' | 'medium' | 'high' = 'low';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.title.trim() && this.description.trim()) {
      this.taskService.addTask(this.title, this.description, this.priority);
      this.title = '';
      this.description = '';
      this.priority = 'low';
    }
  }
}

