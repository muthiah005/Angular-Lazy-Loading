import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'angular-lazyloading-app';
  public cRoute = 'home';

  constructor(private router:Router) {

  }

  ngOnInit() {
    console.debug("--------");
    console.debug("--------",this.cRoute);


    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.cRoute = event.url;
      }
    });
  }

}
