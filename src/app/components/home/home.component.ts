import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  isTaskCompleted: boolean[] = [];

  constructor(public tasksService: TasksService, private title: Title) {
    this.title.setTitle('Home');
  }

  ngOnInit(): void {

  }

  deleteTask(i: number) {
    this.tasksService.deleteTask(i);
  }

  taskDone(i: number) {
    this.tasksService.taskDone(i);
  }

}