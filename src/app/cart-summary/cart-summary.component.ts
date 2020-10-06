import { Router } from '@angular/router';
import { Cart } from './../store/cart.model';
//import { Cart } from 'src/app/store/cart.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(public cart : Cart, public router : Router) { }

  ngOnInit(): void {
  }

  changepg()
  {
    this.router.navigateByUrl("/cart");
  }

}
