import { NgModule } from '@angular/core';

import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskComponent } from './components/task/task.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "add-task", component: AddTaskComponent },
    { path: "task", component: TaskComponent },
    { path: "task/:id", component: TaskComponent },
    { path: "**", component: PageNotFoundComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
