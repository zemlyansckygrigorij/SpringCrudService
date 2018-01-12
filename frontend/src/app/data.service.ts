import {Injectable, Input, OnInit} from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Student} from "./student";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


// Чтобы сервис мог сам внедрять зависимости, нужно обернуть его декоратором @Injectable.
@Injectable()
export class DataService {


 // @Input() students: Student[];
  students: Student[] = this.getStudents();
  i = 0;
  url = 'http://localhost:8080/student';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
    alert(0);
    this.http.get<Student[]>(this.url).subscribe(data => {
      this.students = data;
    });

    alert( this.students.length);
  }


  /********************************************************************/

  getStudents(): Student[]{
    this.http.get<Student[]>(this.url).subscribe(data => {
      this.students = data;
    });
    return this.students;
 }


  createStudent( student: Student){
    this.students.push(student);
    this.http
      .post(this.url, JSON.stringify( student), {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  updateStudent(student: Student){
    this.http
      .put(this.url+'/'+student.id, JSON.stringify( student), {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  deleteStudent(student: Student){
    this.http.delete(this.url+'/'+student.id, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);

  }


  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
