import {Component, OnInit} from '@angular/core';
import {PaymentService} from "../services/payment.service";
import {StudentService} from "../services/student.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {PDFDocumentProxy} from "ng2-pdf-viewer";

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrl: './new-payment.component.css'
})
export class NewPaymentComponent implements OnInit{

  public studentCode!:string;
  public paymentFormGroup!:FormGroup;
  public typePayments!:Array<string>;
  public  pdfFileUrl! : string

   constructor(
     private activatedRoute:ActivatedRoute,
     private fb:FormBuilder,
     private paymentService: PaymentService,
     private studentService: StudentService,
     private datepipe: DatePipe
   ) {
   }

  ngOnInit(): void {
     this.studentCode= this.activatedRoute.snapshot.params["code"];
     this.paymentService.getTypePayment().subscribe({
       next:value => {
         this.typePayments=value;
       },
       error:err =>{
         console.log(err);
       }
       }
     );
     this.paymentFormGroup= this.fb.group({
       date: this.fb.control(''),
       amount: this.fb.control(''),
       type: this.fb.control(''),
       code: this.fb.control(this.studentCode),
       fileName:this.fb.control(''),
       fileSource:this.fb.control(''),
     })
  }

  selectFile(event: any) {
     if (event.target.files.length>0){
       let file = event.target.files[0];
       this.paymentFormGroup.patchValue({
         fileName: file.name,
         fileSource: file
       })
       this.pdfFileUrl= window.URL.createObjectURL(file);
     }

  }

  savePayment() {
    let formData= new FormData();
    // @ts-ignore
    formData.set("date", this.datepipe.transform(this.paymentFormGroup.value.date, 'dd/MM/yyyy'));
    formData.set("amount",this.paymentFormGroup.value.amount);
    formData.set("type",this.paymentFormGroup.value.type);
    formData.set("code",this.paymentFormGroup.value.code);
    formData.set("file",this.paymentFormGroup.value.fileSource);

    this.paymentService.savePayment(formData).subscribe({
      next:value => {
        alert('success')
      },
      error:err => {
        console.log(err)
      }
      }
    )
  }

  afterLoadComplete(event: any) {
    console.log(event);
  }
}
