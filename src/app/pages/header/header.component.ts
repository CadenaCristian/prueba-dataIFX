import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private characterSvc: CharactersService) { }

  ngOnInit(): void {
  }

  showComponent(value:any){
    this.characterSvc.showComponente.emit({value})
  }
}
