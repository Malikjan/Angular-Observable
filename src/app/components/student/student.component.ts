import { Component, OnInit } from '@angular/core';
import { STUDENT } from '../../mock/STUD';
import { Response } from '@angular/http';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student',
  providers: [StudentService],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: Student[];

  constructor(
    //private http: HttpClient
    private studentService: StudentService
  ) { }

  ngOnInit() {

    //   this.http.get('assets/student.json')
    //       .subscribe(data=>{
    //           this.student=data['student'];
    //       });
    // }
    this.studentService.getStudents()
      .subscribe((res: Response) => {
        this.student = res.json()['student'];
      })
  }
}