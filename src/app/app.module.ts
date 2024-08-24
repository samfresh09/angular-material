import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenu, MatMenuModule} from "@angular/material/menu";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import { HomeComponent } from './home/home.component';
import { ProfilsComponent } from './profils/profils.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { PaymentComponent } from './payment/payment.component';
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatDivider, MatDividerModule} from "@angular/material/divider";
import {MatTable, MatTableModule} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatFormField} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthentificationGuard} from "./guards/authentification.guard";
import { LoadStudentComponent } from './load-student/load-student.component';
import { LoadPaymentComponent } from './load-payment/load-payment.component';
import {AuthorizationGuard} from "./guards/authorization.guard";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { StudentPaymentsComponent } from './student-payments/student-payments.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ProfilsComponent,
    LoginComponent,
    StudentComponent,
    PaymentComponent,
    LoadStudentComponent,
    LoadPaymentComponent,
    StudentPaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatIconModule,
    MatIconButton,
    MatButton,
    MatMenuModule,
    MatDrawerContainer,
    MatDrawer,
    MatListItem,
    MatNavList,
    MatDrawerContent,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatPaginator,
    MatFormField,
    MatInputModule,
    MatSortModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
    AuthentificationGuard,
    AuthorizationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
