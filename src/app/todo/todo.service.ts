import { Injectable } from '@angular/core';
import { Task } from "../task";
import { TASKS } from '../mock-task';
import { TaskComponent } from '../task/task.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

//   addTaskService(): Task {
// return new Task(this)
    
//   }

  constructor() { }
}
