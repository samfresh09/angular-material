import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  public username !: string;
  public roles !: any;
  public isAuthentificated : boolean= false;

  constructor(private router:Router) {
  }

  //methode de login
  public login(username: string, password: string) {
    if (username=="admin" && password=="12345678"){
      this.username=username;
      this.roles=["ADMIN"];
      this.isAuthentificated= true;
      return true;
    }else {
      return false;
    }
  }
  //methode de logout
  public  logout(){
    this.isAuthentificated= false;
    this.username= "";
    this.roles=undefined;
    this.router.navigateByUrl("/login")
  }
}


