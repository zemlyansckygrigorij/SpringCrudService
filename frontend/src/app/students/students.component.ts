import {Component, Injectable, OnInit} from '@angular/core';
import {Student} from "../student";
import {DataService} from "../data.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { Http, Response, RequestOptions, Headers } from '@angular/http';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

@Injectable()
export class StudentsComponent implements OnInit {
  students: Student[];
 // headers = new HttpHeaders();

  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get<Student[]>('http://localhost:8080/student').subscribe(data => {
      this.students = data;
      console.log(data);
    },
      err => {
        console.log("Error occured.")
      });
  }




















 /* students: Student[];
  //dataService: DataService;
  private studentsUrl = 'http//localhost:8080/student/';
  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<Student[]> {
    alert(" getStudents()");
    //this.http.get<Student[]>(' studentsUrl').toPromise().then(students => this.students = students);
    return this.httpClient.get<Student[]>(' studentsUrl');
  }

  ngOnInit(): void {
alert("ngOnInit()");
    this.getStudents().subscribe(students => this.students = students);
  }*/
}
