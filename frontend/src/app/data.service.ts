import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Student} from "./student";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


// Чтобы сервис мог сам внедрять зависимости, нужно обернуть его декоратором @Injectable.
@Injectable()
export class DataService {

  private studentsUrl = 'http//localhost:8080/student/';  // URL to web API


  constructor(private httpClient: HttpClient) { }

  public getStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.studentsUrl);
  }
}
