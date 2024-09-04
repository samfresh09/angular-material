import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../models/Student";
import {Payment} from "../models/Payment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private router:Router,
    private http: HttpClient
  ) {}


  public getTypePayment():Observable<Array<string>>{
    return this.http.get<Array<string>>("http://localhost:8085/api/payment/type-values");
  }

  public savePayment(formData:any):Observable<Payment>{
    return this.http.post<Payment>("http://localhost:8085/api/payment/",formData);
  }

  public getOnePayment(id:any):Observable<Payment>{
    return this.http.get<Payment>("http://localhost:8085/api/payment/"+id);
  }


  getPaymentDetails(paymentId: any) {
    return this.http.get("http://localhost:8085/api/payment/facture/"+paymentId,{responseType:'blob'});
  }
}
