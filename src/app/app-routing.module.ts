import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProfilsComponent} from "./profils/profils.component";
import {StudentComponent} from "./student/student.component";
import {PaymentComponent} from "./payment/payment.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {AuthentificationGuard} from "./guards/authentification.guard";

const routes: Routes = [
  {path: "", redirectTo:"/login", pathMatch:"full"},
  {path: "login", component: LoginComponent},
  {path: "admin", component: DashboardComponent, canActivate : [AuthentificationGuard], children:[
      {path: "home", component: HomeComponent},
      {path: "profils", component: ProfilsComponent},
      {path: "students", component: StudentComponent},
      {path: "payment", component: PaymentComponent},

    ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
