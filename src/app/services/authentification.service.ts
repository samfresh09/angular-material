import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  public username !: string;
  public roles !: any;
  public isAuthentificated : boolean= false;
  public  users: any= {
    'admin': ['ADMIN','STUDENT'],
    'student': ['STUDENT']
  };

  constructor(private router:Router) {
  }

  //methode de login
  public login(username: string, password: string) {
    if (this.users[username] && password=="1234"){
      this.username=username;
      this.roles= this.users[username];
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


