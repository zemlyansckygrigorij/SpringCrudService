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


  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.getStudent();
    this.formStudentNull();
  }

  selectStudent(st){
    this.formStudent = st;
  }

  getStudent(){
    this.http.get<Student[]>(this.url).subscribe(data => {
        this.students = data;
        console.log(data);
      },
      err => {
        console.log("Error occured.")
      });
  }

  create(){
    this.createStudent();
    this.ngOnInit();
    window.location.reload();
  }
  update(){
    this.updateStudent();
    this.ngOnInit();
    window.location.reload();


  }
  delete(){
    this.deleteStudent();
    this.ngOnInit();
    window.location.reload();//reload this.page


  }


  createStudent(){
   this.students.push(this.formStudent);
     this.http
      .post(this.url, JSON.stringify( this.formStudent), {headers: this.headers})
      .toPromise()
     // .then(res => res.json() as Student)
      .catch(this.handleError);
  }

  updateStudent(){
    this.http
      .put(this.url+'/'+this.formStudent.id, JSON.stringify( this.formStudent), {headers: this.headers})
      .toPromise()
     // .then(() =>  this.formStudent)
      .catch(this.handleError);
  }

  deleteStudent(){
    this.http.delete(this.url+'/'+this.formStudent.id, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);

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
