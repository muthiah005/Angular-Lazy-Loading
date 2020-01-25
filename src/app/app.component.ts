import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'angular-lazyloading-app';
  public cRoute = 'home';
  public isLoggedIn:boolean;

  constructor(private router:Router,private authService:AuthService) {

  }

  ngOnInit() {
    console.debug("--------");
    console.debug("--------",this.cRoute,this.isLoggedIn);
    let user = this.authService.getLocalUserInfo();

    if(user !== undefined){
      this.isLoggedIn = this.authService.isUserLoggedIn();
    }


    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.cRoute = event.url;
        this.isLoggedIn = this.authService.isUserLoggedIn();
      }
    });
  }

  logout()  {
    this.authService.clearLocalInfo();
    this.isLoggedIn = this.authService.isUserLoggedIn();
    this.router.navigate(['home']);
  }

}
