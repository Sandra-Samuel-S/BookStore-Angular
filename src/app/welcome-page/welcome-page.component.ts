import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent  {

  constructor(public router : Router) { }

  

  navigate()
  {
    this.router.navigateByUrl("/store");
  }
  navigateCart()
  {
    this.router.navigateByUrl("/cart");
  }

}
