import { Component, OnInit } from '@angular/core';
import { Cart } from '../store/cart.model';


@Component({
  templateUrl: './cart-details.component.html'
})
export class CartDetailsComponent implements OnInit {

  constructor(public cart : Cart) { }

  

  ngOnInit(): void {
  }


  func1(x)
  {
    if(x.value==0)
    {
      x.value=1;
      x.change;
    }
  }



   /*maxLengthCheck(object) {
    if (object.value.length > object.max.length)
      object.value = object.value.slice(0, object.max.length)
   } */

}
