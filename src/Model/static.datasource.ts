//import { Order } from './order.model';
import { Product } from './product.model';
import { Observable, from} from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class StaticDataSource
{
    private products: Product[] = [
        new Product(1, "Harry Potter and the Sorcerer's Stone ","Urban Fantasy","Urban Fantasy description", 315),
        new Product(2, "Harry Potter and the Chamber of Secrets","Urban Fantasy","Urban Fantasy description", 400),
        new Product(3, "Harry Potter and the Prisoner of Azkaban","Urban Fantasy","Urban Fantasy description", 370),
        new Product(4, "Harry Potter and the Goblet of Fire","Urban Fantasy","Urban Fantasy description", 515),
        new Product(5, "Harry Potter and the Order of Phoenix","Urban Fantasy","Urban Fantasy description", 800),
        new Product(6, "Harry Potter and the Half-Blood Prince","Urban Fantasy","Urban Fantasy description", 800),
        new Product(7, "Harry Potter and the Deathly Hallows","Urban Fantasy","Urban Fantasy description", 1200),
        new Product(8, "The Kite runner","Historical Fiction","Historical Fiction description", 315),
        new Product(9, "The Socceror","Historical Fiction","Historical Fiction description", 315),
        new Product(10, "The Kite runner 2","Historical Fiction","Historical Fiction description", 315),
        new Product(11, "The Kite runner 3","Historical Fiction continuation","Historical Fiction description", 315)


    ];

    getProducts() : Observable<Product[]>
    {
        return from([this.products]);
    }

    /*saveOrder(Order : Order) : Observable<Order>
    {
        console.log(JSON.stringify(Order));
        return from([Order]);
    }
    */

}