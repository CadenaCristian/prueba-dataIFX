import { EventEmitter,Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { endpoint } from '../infraestructure/endpoint/endpoint';
import { Characters } from '../models/response/characters';
import { map } from 'rxjs/operators';
import { Students } from '../models/response/students';
import { Task } from '../models/request/task';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  tasks: Task[] = [];
  student: Students[];
  @Output() showComponente: EventEmitter<any> = new EventEmitter();
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getCharacters(data: string): Observable<Characters[]> {
    return this.http.get(endpoint.Characters+"/"+data).pipe(
      map(response => response as Characters[]),
    );
  }

  getStudents(): Observable<Characters[]> {
    return this.http.get(endpoint.Students).pipe(
      map(response => response as Characters[]),
    );
  }

  getStaff(): Observable<Characters[]> {
    return this.http.get(endpoint.Staff).pipe(
      map(response => response as Characters[]),
    );
  }

  addTask(task: Task) {
    this.tasks.push(task);
    let tasks = [];
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks')!);
      tasks.push(task); 
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  getTasks() {
    if(localStorage.getItem('tasks') === null) {
      this.tasks = [];
    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks')!);
    }
    return this.tasks;
  }
}
