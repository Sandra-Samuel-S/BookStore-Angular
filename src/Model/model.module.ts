import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { AuthService } from './auth.service';
//import { OrderRepo } from './order.repository';
//import { Order } from './order.model';
import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { Cart } from 'src/app/store/cart.model';


@NgModule
({
    imports : [HttpClientModule],
    providers: [ProductRepository, StaticDataSource, Cart]
       
})

export class ModelModule
{

}