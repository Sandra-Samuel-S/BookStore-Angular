import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [BrowserModule, StoreModule,
     RouterModule.forRoot(
       [
         {path: "welcomepage", component: WelcomePageComponent},
         {path: "store", component: StoreComponent},
         {path: "cart",component: CartDetailsComponent},
         {path: "checkout", component: CheckoutComponent},
         {path: "**", redirectTo: "/welcomepage"}
       ]
      )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
