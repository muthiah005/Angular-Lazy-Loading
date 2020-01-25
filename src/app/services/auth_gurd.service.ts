import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
    providedIn:"root"
})
export class AuthGuardService implements CanActivate {
    public roleId:Number = 2;
    constructor(public auth: AuthService, public router: Router) { 

    }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        // this will be passed from the route config
        // on the data property
        // const expectedRole = route.data.expectedRole;
        // decode the token to get its payload
        // const tokenPayload = decode(token);
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['home']);
            return false;
        }else{            
            return true;
        }
        
    }
}