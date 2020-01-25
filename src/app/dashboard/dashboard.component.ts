import { Component } from "@angular/core";
import { AuthService } from '../services/auth.service';

@Component({
    selector:'home',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})


export class DashboardComponent  {
    public user:any 
    constructor(private authService:AuthService){

    }

    ngOnInit()  {
        console.debug("Dashboard");
        if(this.authService.isUserLoggedIn()){
            this.user = this.authService.getLocalUserInfo();
        }
    }
}