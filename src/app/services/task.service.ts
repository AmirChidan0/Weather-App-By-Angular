import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private idCounter = 1;

  // افزودن وظیفه جدید
  addTask(title: string, description: string, priority: 'low' | 'medium' | 'high'): void {
    const newTask = new Task(this.idCounter++, title, description, priority);
    this.tasks.push(newTask);
  }

  // دریافت تمامی وظایف
  getTasks(): Task[] {
    return this.tasks;
  }

  // حذف وظیفه بر اساس ID
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
  
