import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Characters } from 'src/app/core/models/response/characters';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  house = ["slytherin", "gryffindor", "ravenclaw", "hufflepuff"];
  houseSelect = ''
  form = new FormGroup({});
  charactersModel: Characters[];
  constructor(private formBuilder: FormBuilder, private characterSvc: CharactersService) {
    this.form = this.formBuilder.group({
      website: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }
  
  getHouseList(e:any) {
    this.characterSvc.getCharacters(e.target.value).subscribe(character => {
      this.charactersModel = character;
      console.log("changeWebsite",this.charactersModel);
    })
  }
}
