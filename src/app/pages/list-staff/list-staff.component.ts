import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/core/models/response/staff';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.scss']
})
export class ListStaffComponent implements OnInit {

  staffModel: Staff[];
  constructor(private characterSvc: CharactersService) { }

  ngOnInit() {
    this.getStudentList();
  }

  getStudentList() {
    this.characterSvc.getStaff().subscribe(character => {
      this.staffModel = character;
    })
  }
}
