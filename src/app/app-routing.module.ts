import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './pages/add-student/add-student.component';

const routes: Routes = [
  {path: '', component: AddStudentComponent},
  {path: 'add-student' , component: AddStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
