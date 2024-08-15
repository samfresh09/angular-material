import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements  OnInit{

  @ViewChild(MatPaginator) page!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  public  payments!: any;
  public dataSource!: any;
  public colums!:any;
  constructor(protected http:HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("http://127.0.0.1:8085/api/payment/").subscribe(
      {
        next: data => {
          this.payments=data;
          this.dataSource= new MatTableDataSource(this.payments);
          this.dataSource.paginator= this.page;
          this.dataSource.sort= this.sort;
        },
        error: err => {
          console.log(err);
        }
      }

    )

    this.colums= ["id","date","montant","type","status","student"];
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.payments.filter = filterValue.trim().toLowerCase();

    if (this.payments.paginator) {
      this.payments.paginator.firstPage();
    }
  }



}
