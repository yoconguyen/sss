import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TASKS } from "../mock-task";
import { Task } from "../task";
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks:Task[] = [
    {taskName: 'chinh', description:'1'},
    {taskName: 'viet', description:'2'},
];
  addTaskForm = new FormGroup({
    taskName: new FormControl(''),
    description: new FormControl('')
  });

  selectedTask?: Task;
  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    // this.todoService.getvalue().subscribe();

  }
  addTask(): void {
    // console.log(this.addTaskForm.value)
    // TASKS.push(this.addTaskForm.taskName.value)
    // console.log(TASKS)
    let c ={taskName: this.addTaskForm.value.taskName, description:this.addTaskForm.value.description}
    this.tasks.push(c)
    
  }
}
