import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})

export class AuthService {
    public isLoggedIn:boolean = false;
    public userList:Array<any> = [{"id":1,"email":"muthiah005@gmail.com","password":"12345678"},
                                  {"id":2,"email":"test@gmail.com","password":"12345678"}]
    constructor(){

    }

    ngOnInit(){
        this.isAuthenticated();
    }

    public setDeafultUserList() {
        const userList  = JSON.parse(localStorage.getItem('userList'));
        console.debug("userList",userList);
        if(userList === undefined || userList === null){
            localStorage.setItem('userList',JSON.stringify(this.userList));
        }
    }

    public getDeafultUserList(){
        return this.userList;
    }

    public isAuthenticated(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user['email']){
            this.isLoggedIn = true;
            return true;

        }
        return false;
    }

    public setLocalUserInfo(loggedInUser){
        localStorage.setItem('user',JSON.stringify(loggedInUser));
    }

    public addNewUser(user) {
        this.userList.push(user);
        localStorage.setItem('userList',JSON.stringify(this.userList));
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