import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {PaymentService} from "../services/payment.service";
import {Payment} from "../models/Payment";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent implements  OnInit{

  public  paymentId !: any;
  public  pdfFileUrl: any;
  public payment!: Payment;
  public dataSource!: any;
  public colums!:any;
  constructor(private activatedRoute:ActivatedRoute,
              private paymentService:PaymentService) {
  }

  ngOnInit(): void {
    this.paymentId= this.activatedRoute.snapshot.params["id"];
    this.paymentService.getOnePayment(this.paymentId).subscribe({
      next:value => {
        this.payment= value;
      },
      error:err => {
        console.log(err,this.payment);
      }
    })
    this.paymentService.getPaymentDetails(this.paymentId).subscribe({
      next:value => {
        let blob:Blob= new  Blob([value],{type: 'application/pdf'})
        this.pdfFileUrl= window.URL.createObjectURL(blob);
      },
      error:err => {
        console.log(err);
      }

    })
    this.colums= ["id","date","montant","type","status","student"];
  }


  afterLoadComplete($event: any) {

  }
}
