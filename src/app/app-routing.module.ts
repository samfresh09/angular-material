import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProfilsComponent} from "./profils/profils.component";
import {StudentComponent} from "./student/student.component";
import {PaymentComponent} from "./payment/payment.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "profils", component: ProfilsComponent},
  {path: "students", component: StudentComponent},
  {path: "payment", component: PaymentComponent},
  {path: "dashboard", component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
