import {OnInit} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Student} from "../student";
import {Observable} from "rxjs/Observable";


export class StudentsService implements OnInit {

  url = 'http://localhost:8080/student';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

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
  }

  updateStudent(student: Student){
    this.http
      .put(this.url+'/'+student.id, JSON.stringify( student), {headers: this.headers})
      .toPromise()
      // .then(() =>  this.formStudent)
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
