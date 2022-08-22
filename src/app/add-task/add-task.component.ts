import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from "src/app/todo/todo.service";
import { Task } from "../task";
import { TASKS } from '../mock-task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  addTaskForm = new FormGroup({
    taskName: new FormControl(''),
    description: new FormControl('')
  });

  tasks = TASKS;
  // addTaskService(): Task {
  //   return new Task('a','b')
  // }

  addTask(): void {
    // console.log(this.addTaskForm.value)
    // TASKS.push(this.addTaskForm.taskName.value)
    // console.log(TASKS)
    let c =[...TASKS ,this.addTaskForm.value ]
  }

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

}
