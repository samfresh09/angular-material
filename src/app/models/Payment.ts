
//model de student
import {Student} from "./Student";

export interface Payment{
  id: string
  date:string,
  amount:string,
  type:string,
  status:string,
  file:string,
  student:Student,

}

export enum TypePayment{
  CASH,CHECK,TRANSFER
}

export enum PaymentStatus{
  CREATED, VALIDATED,REJECTED,CANCELED
}

