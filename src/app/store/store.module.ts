import { WelcomePageComponent } from './../welcome-page/welcome-page.component';

import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './../checkout/checkout.component';
import { CartDetailsComponent } from './../cart-details/cart-details.component';
import { CartSummaryComponent } from './../cart-summary/cart-summary.component';
import { ModelModule } from './../../Model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { FormsModule } from '@angular/forms';

@NgModule({
       
        imports: [
            ModelModule,
            BrowserModule, 
            FormsModule,
            RouterModule
        ],
        declarations: [
            StoreComponent, CartSummaryComponent,
            CartDetailsComponent, CheckoutComponent, WelcomePageComponent
        ],

        exports: [
            StoreComponent,
            CartDetailsComponent,
            CheckoutComponent
        ]

    }
)
export class StoreModule{}