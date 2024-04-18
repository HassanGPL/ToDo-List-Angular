import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {

  taskID: any;
  task: any;

  constructor(
    private route: ActivatedRoute,
    public tasksService: TasksService,
    private roter: Router,
    private title: Title
  ) {
    this.title.setTitle('Edit Task')
  }

  ngOnInit(): void {
    this.taskID = this.route.snapshot.paramMap.get('id');
    this.task = this.tasksService.tasks[this.taskID];
  }

  updateTask() {
    this.tasksService.updateTask(this.taskID, this.task);
    this.roter.navigate(["/"]);
  }
}
