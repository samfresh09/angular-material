import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthentificationService} from "../services/authentification.service";

@Injectable()
 export  class AuthentificationGuard implements CanActivate{
   constructor(private  authService: AuthentificationService,
               private  router:Router) {
   }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
     if (this.authService.isAuthentificated){
       return true;
     }else {
       this.router.navigateByUrl("/login").then(r => false);
       return false;
     }
   }

 }
