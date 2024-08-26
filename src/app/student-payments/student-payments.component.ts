import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Payment} from "../models/Payment";
import {MatTableDataSource} from "@angular/material/table";
import {StudentService} from "../services/student.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-student-payments',
  templateUrl: './student-payments.component.html',
  styleUrl: './student-payments.component.css'
})
export class StudentPaymentsComponent implements  OnInit{
  public studentCode!: string;
  public studentPayments!: Array<Payment>;
  public studentPaymentDataSource!: MatTableDataSource<any>;
  public colums= ["id","date","montant","type","status","student"];

  @ViewChild(MatPaginator) page!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private activeRouter:ActivatedRoute,
    private studentService:StudentService,
    private router:Router
  ) {}
  ngOnInit(): void {
   this.studentCode= this.activeRouter.snapshot.params["code"]
    this.studentService.getPaymentByStudent(this.studentCode).subscribe({
      next:value => {
        this.studentPayments=value;
        this.studentPaymentDataSource= new MatTableDataSource(this.studentPayments);
        this.studentPaymentDataSource.sort=this.sort;
        this.studentPaymentDataSource.paginator= this.page;
      },
      error:err => {
        console.log(err);
      }
    })
  }

  public newPayment(){
    this.router.navigateByUrl("/admin/new-payments/"+this.studentCode)
  }

  afterLoadComplete() {

  }
}
