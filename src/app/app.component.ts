import { Component, OnInit } from '@angular/core';
import { CharactersService } from './core/services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mostrar: Boolean = true;
  characterSection: Boolean = true;
  studentSection: Boolean = true;
  teacherSection: Boolean = true;
  seenewstudents: Boolean = true;
  title = 'prueba-dataifx';

  constructor(private characterSvc: CharactersService){}
  ngOnInit(): void{
    this.characterSvc.showComponente.subscribe(data => {
      switch (data.value) {
        case "Charactersection":
            this.characterSection = false;
            this.studentSection = true;
            this.teacherSection = true;
            this.seenewstudents = true;
            break;
        case "Studentsection":
            this.characterSection = true;
            this.studentSection = false;
            this.teacherSection = true;
            this.seenewstudents = true;
            break;
        case "Teachersection":
            this.characterSection = true;
            this.studentSection = true;
            this.teacherSection = false;
            this.seenewstudents = true;
          break;
        case "Seenewstudents":
            this.characterSection = true;
            this.studentSection = true;
            this.teacherSection = true;
            this.seenewstudents = false;              
            break;
        default:
            console.log("No such day exists!");
            break;
    }
    })
  }
}
