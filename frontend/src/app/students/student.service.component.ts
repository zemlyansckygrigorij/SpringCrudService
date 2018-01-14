import {OnInit} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Student} from "../student";
import {Observable} from "rxjs/Observable";


export class StudentsService implements OnInit {

  //url = //'http://localhost:8080/student';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  url =  'https://app-student.herokuapp.com/student';
  ngOnInit(): void {}
  constructor(private http: HttpClient){}


  getStudent(): Observable<Student[]>{
    return this.http.get<Student[]>(this.url);
  }

  createStudent(student: Student){
    this.http
      .post(this.url, JSON.stringify(student), {headers: this.headers})
      .toPromise()
      // .then(res => res.json() as Student)
      .catch(this.handleError);
    console.log('create() service ' + student);
  }

  updateStudent(student: Student){
    this.http
      .put(this.url+'/'+student.id, JSON.stringify( student), {headers: this.headers})
      .toPromise()
      // .then(() =>  this.formStudent)
      .catch(this.handleError);
    console.log('update() service ' + student);
    setTimeout(window.location.reload(), 10000);
  }

  deleteStudent(student: Student){
    this.http.delete(this.url+'/'+student.id, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
    console.log(' deleteStudent service ' + student);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
