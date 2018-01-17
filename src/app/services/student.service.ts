import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentService {

  constructor(
    private http:Http
  ) { }

  getStudents():Observable<Response> {
      return this.http.get('assets/student.json');
   }
}