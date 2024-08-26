import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProfilsComponent} from "./profils/profils.component";
import {StudentComponent} from "./student/student.component";
import {PaymentComponent} from "./payment/payment.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {AuthentificationGuard} from "./guards/authentification.guard";
import {LoadStudentComponent} from "./load-student/load-student.component";
import {LoadPaymentComponent} from "./load-payment/load-payment.component";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {StudentPaymentsComponent} from "./student-payments/student-payments.component";
import {NewPaymentComponent} from "./new-payment/new-payment.component";

const routes: Routes = [
  {path: "", redirectTo:"/login", pathMatch:"full"},
  {path: "login", component: LoginComponent},
  {path: "admin", component: DashboardComponent, canActivate : [AuthentificationGuard], children:[
      {path: "home", component: HomeComponent},
      {path: "profils", component: ProfilsComponent},
      {path: "students", component: StudentComponent},
      {path: "student-payments/:code", component: StudentPaymentsComponent},
      {path: "new-payments/:code", component: NewPaymentComponent},
      {path: "payment", component: PaymentComponent},
      {path: "load-students", component: LoadStudentComponent, canActivate: [AuthorizationGuard], data:{"roles":["ADMIN"]}},
      {path: "load-payments", component: LoadPaymentComponent, canActivate: [AuthorizationGuard], data:{"roles":["ADMIN"]}},

    ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
