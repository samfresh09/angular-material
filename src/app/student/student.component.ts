import {Component, OnInit, ViewChild} from '@angular/core';
import {Student} from "../models/Student";
import {Router} from "@angular/router";
import {StudentService} from "../services/student.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{
  public students !: Array<Student>;
  public studentsDataSource!:any;
  public colums=["id","lastname","firstname","email","payments"];

  @ViewChild(MatPaginator) page!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(
    private router:Router,
    private studentService: StudentService
  ) {}



  ngOnInit(): void {
    this.studentService.getAllStudent().subscribe(
      {
        next:value =>{
          this.students= value;
          this.studentsDataSource= new  MatTableDataSource(this.students);
          this.studentsDataSource.paginator=this.page;
          this.studentsDataSource.sort=this.sort;
        },
        error:err => {
          console.log(err);
        }
      }
    )
  }

  applyFilter(event: KeyboardEvent) {

  }

  getPayment(student: Student) {
    this.router.navigateByUrl(`/admin/student-payments/${student.code}`);
  }
}
