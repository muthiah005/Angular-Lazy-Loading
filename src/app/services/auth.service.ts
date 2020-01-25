import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})

export class AuthService {
    public isLoggedIn:boolean = false;
    constructor(){

    }

    ngOnInit(){
        this.isAuthenticated();
    }

    public isAuthenticated(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));

        if(user['email'] === 'muthiah005@gmail.com'){
            this.isLoggedIn = true;
            return true;

        }
        return false;
    }

    public setLocalUserInfo(loggedInUser){
        localStorage.setItem('user',JSON.stringify(loggedInUser));
    }

    public getLocalUserInfo()   {
        const user = JSON.parse(localStorage.getItem('user'));
        return user;
    }

    public clearLocalInfo(){
        localStorage.removeItem('user');
        this.isLoggedIn = false;
    }

    public isUserLoggedIn(){
        return this.isLoggedIn;
    }
}