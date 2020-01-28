import { Component } from "@angular/core";
import { AuthService } from '../services/auth.service';

@Component({
    selector:'home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})


export class HomeComponent  {

    public isSignIn:boolean = false;

    constructor(private authService:AuthService){

    }

    ngOnInit()  {
        console.debug("Home");
        this.authService.setDeafultUserList();
    }

    showLoginForm()     {
        this.isSignIn = true;
    }
    showSignUpForm()    {
        this.isSignIn = false;
    }
}