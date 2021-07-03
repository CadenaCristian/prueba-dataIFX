import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/core/models/response/students';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})
export class ListStudentsComponent implements OnInit {

  studentModel: Students[];

  constructor(private characterSvc: CharactersService) { }

  ngOnInit() {
    this.getStudentList();
  }

  getStudentList() {
    this.characterSvc.getStudents().subscribe(character => {
      this.studentModel = character;
    })
  }
}
