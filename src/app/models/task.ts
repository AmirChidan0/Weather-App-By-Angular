export class Task {
  id: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;

  constructor(id: number, title: string, description: string, priority: 'low' | 'medium' | 'high') {
    this.id = id;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.completed = false; // وظایف پیش‌فرض کامل نشده هستند
  }
}

