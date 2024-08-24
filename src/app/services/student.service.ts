import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../models/Student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private router:Router,
    private http: HttpClient
  ) {}


  public getAllStudent():Observable<Array<Student>>{
    return this.http.get<Array<Student>>("http://localhost:8085/api/student/");
  }

  public getStudentWithCode(code:string):Observable<Student>{
    return this.http.get<Student>("http://localhost:8085/api/student/"+code)
  }
}
