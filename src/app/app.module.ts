import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HousesComponent } from './pages/houses/houses.component';
import { ListCharactersComponent } from './pages/list-characters/list-characters.component';
import { ListStudentsComponent } from './pages/list-students/list-students.component';
import { ListStaffComponent } from './pages/list-staff/list-staff.component';
import { AddStudentComponent } from './pages/add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HousesComponent,
    ListCharactersComponent,
    ListStudentsComponent,
    ListStaffComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
