import { Component } from "@angular/core";

@Component({
    selector:'products',
    templateUrl:'./products.component.html',
    styleUrls:['./products.component.css']
})


export class ProductsComponent {
     constructor(){

     }

     ngOnInit() {
         console.debug("products");
     }
}