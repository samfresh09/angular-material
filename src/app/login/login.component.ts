import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginFormGroup!: FormGroup;
  constructor(private formbuilder:FormBuilder,
              private  authService:AuthentificationService,
              private  router: Router) {
  }

  ngOnInit(): void {
  this.loginFormGroup= this.formbuilder.group({
    username: this.formbuilder.control(""),
    password: this.formbuilder.control("")
    }
  )
  }

  login() {
    let username= this.loginFormGroup.value.username;
    let password= this.loginFormGroup.value.password;
    let auth: boolean= this.authService.login(username,password)
    if (auth){
      this.router.navigateByUrl("/admin").then(r => false);
    }
    console.log(username,password,this.authService.roles);
  }
}
