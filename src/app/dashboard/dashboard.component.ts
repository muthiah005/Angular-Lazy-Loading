import { Component } from "@angular/core";

@Component({
    selector:'home',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})


export class DashboardComponent  {
    constructor(){

    }

    ngOnInit()  {
        console.debug("Dashboard");
    }
}