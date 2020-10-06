import { StaticDataSource } from './static.datasource';
import { Product } from './product.model';
import { Injectable } from '@angular/core';



@Injectable()
export class ProductRepository
{
    private products: Product[] = [];
    private genres: string[] = [];

    constructor(private datasource : StaticDataSource)
    {
        datasource.getProducts().subscribe(data =>
            {
                this.products = data;
                this.genres = data.map(p => p.genre).filter((c, index, array) => array.indexOf(c) == index).sort();
            });
    }

    getProducts(genre : string = null) : Product[]
       {
            return this.products.filter(p => genre == null || genre == p.genre);
        }

    getProduct(id : number) : Product
        {
            return this.products.find( p=> p.id == id);
        }
    

    getGenres() : string[]
    {
        return this.genres;
    }

    /*
    saveProduct(product : Product)
    {
        if(product.id == null || product.id == 0)
        {
            this.datasource.saveProduct(product).subscribe(
                p => this.products.push(p)
            );
        }
        else
        {
            this.datasource.updateProduct(product).subscribe(
                p => {
                    this.products.splice(this.products.
                        findIndex(p=> p.id == product.id), 1, product);

                    
                }
            )

        }
    }

    deleteProduct(id : number)
    {
        this.datasource.deleteOrder(id).subscribe
        (p=> 
            {
              this.products.splice(this.products.
                findIndex(p=> p.id == id), 1);
            }
        )

    }
    */
    

}