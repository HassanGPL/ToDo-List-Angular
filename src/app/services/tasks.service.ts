import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = []
  constructor() {
    let storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    } else {
      this.tasks = [];
    }
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
    this.storeTasks();
  }

  saveTask(title: any, description: any, date: any) {
    this.tasks.push({
      title: title,
      description: description,
      dueDate: date,
      done: false
    });
    this.storeTasks();
  }

  updateTask(taskID: any, task: any) {
    this.tasks[taskID] = task;
    this.storeTasks();
  }

  taskDone(i: number) {
    this.tasks[i].done = !this.tasks[i].done;
    this.storeTasks();
  }

  storeTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
