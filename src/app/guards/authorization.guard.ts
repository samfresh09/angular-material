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
 export  class AuthorizationGuard implements CanActivate{
   constructor(private  authService: AuthentificationService,
               private  router:Router) {
   }

  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    let authorize: boolean=false;
    let authorizedRole: string[]= route.data["roles"];
    for (let role of this.authService.roles){
        console.log("role accepte "+authorizedRole);
        if (authorizedRole.includes(role)){
          authorize=true;
        }
    }
    return authorize
   }

 }
