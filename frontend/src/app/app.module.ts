import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule // Импортируем модуль

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
