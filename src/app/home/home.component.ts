import { Component } from "@angular/core";

@Component({
    selector:'home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})


export class HomeComponent  {

    public isSignIn:boolean = false;

    constructor(){

    }

    ngOnInit()  {
        console.debug("Home");
    }

    showLoginForm()     {
        this.isSignIn = true;
    }
    showSignUpForm()    {
        this.isSignIn = false;
    }
}