import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router) {

  }
  toProductDetails() {
    //效果和[routerLink]相同
    this.router.navigate(['/product'])
  }
}
