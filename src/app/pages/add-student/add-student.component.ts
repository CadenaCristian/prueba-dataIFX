import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/core/models/request/task';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  Name: string;
  Patronus: string;
  Age: string;
  Image: string;
  task: Task[];
  show: boolean = false;
  constructor(public taskService: CharactersService) { }

  ngOnInit() {
    this.task = this.taskService.getTasks();
  }

  addTask(newName:HTMLInputElement,newPatronus:HTMLInputElement,newAge:HTMLInputElement) {
    this.taskService.addTask({
      Name: newName.value,
      Patronus: newPatronus.value,
      Age: newAge.value,
      hide: true
    });
    this.show = true;
    newName.value = '';
    newPatronus.value = '';
    newAge.value = '';
    return false;
  }

}
