import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Student} from "../student";
import {DataService} from "../data.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

import {StudentsService} from "./student.service.component";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

@Injectable()
export class StudentsComponent implements OnInit {

  students: Student[];
  service:  StudentsService;
  @Input()  formStudent = new  Student();



  constructor(private http: HttpClient){
    this.service= new StudentsService(http);
    this.refreshPage();
  }
  ngOnInit(): void {}

  selectStudent(st){
    this.formStudent = st;
  }

  getStudent(){
    this.service.getStudent().subscribe(students => this.students = students);
  }

  create(){
    setTimeout(window.location.reload(), 1000);
    this.service.createStudent(this.formStudent);
   // window.location.reload();
    console.log('create() ' + this.formStudent);
    alert("change done !");
    window.location.reload();//reload this.page
  //  setTimeout(window.location.reload(), 1000);

  }

  update(){
    this.service.updateStudent(this.formStudent);
  //  window.location.reload();
    console.log('update() ' + this.formStudent);
    setTimeout(window.location.reload(), 1000);
  }

  delete(){
    this.service.deleteStudent(this.formStudent);
   // window.location.reload();//reload this.page
    console.log('delete() ' + this.formStudent);
    setTimeout(window.location.reload(), 1000);
  }

  deleteStudentById(student: Student){
    this.service.deleteStudent(student);
  //  window.location.reload();//reload this.page
    console.log('deleteStudentById() ' + this.formStudent);
    alert("change done !");
    window.location.reload();//reload this.page
  //  setTimeout(window.location.reload(), 10000);
  }
//formStudent update select student
  loadStudentToEdit(student: Student){
    this.formStudent.id = student.id;
    this.service.updateStudent(this.formStudent);
    alert("change done !");
    console.log(' loadStudentToEdit() ' + this.formStudent);

    window.location.reload();//reload this.page
  //  setTimeout(window.location.reload(), 10000);
  }

  formStudentNull(){
    this.formStudent.id = -1;
    this.formStudent.name = "";
    this.formStudent.age = 0;
  }

  refreshPage(){
    this.getStudent();
    this.formStudentNull();
  }
}
