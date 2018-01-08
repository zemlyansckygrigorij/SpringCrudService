import {Component, Injectable, Input, OnInit} from '@angular/core';
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
  @Input()  formStudent= new  Student();
  url = 'http://localhost:8080/student';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
 // headers = new HttpHeaders();

  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get<Student[]>(this.url).subscribe(data => {
      this.students = data;
      console.log(data);
    },
      err => {
        console.log("Error occured.")
      });

    this.formStudentNull();

  }



  selectStudent(st){
    this.formStudent = st;
  }

  createStudent(){
    this.formStudent = new  Student();
    this.students.push(this.formStudent)
  }
  updateStudent(){

  }

  deleteStudent(id: number){

    let index = this.students.indexOf(this.formStudent)
    if(index !=-1){
      this.students.splice(index, 1);
    }

    this.http.delete(this.url+'/${this.formStudent.id}', {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);

    this.formStudentNull();
  }


  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  formStudentNull(){
    this.formStudent.id = -1;
    this.formStudent.name = "";
    this.formStudent.age = 0;
  }
}