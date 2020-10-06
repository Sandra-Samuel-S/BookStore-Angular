import { Product } from './../../Model/product.model';
import { Injectable } from '@angular/core';


//cart
/*attributes
 1. array
 2. Itemcount
 3. Price
 4
*/

/*
Why services?

*/
@Injectable()
export class Cart
{
    public Lines : CartLine[] = [];
    public itemCount : number = 0;
    public cartPrice : number = 0;

    addLine(product : Product, quantity : number = 1)
    {
        let line = this.Lines.find(line => line.product.id==product.id);
        if(line != undefined)
        {
            line.quantity += quantity;
            console.log("works");            
        }
        else
        {
            this.Lines.push(new CartLine(product, quantity));
            console.log("ELSE works");
            
        }
        
         //call the recalc method to update cart(line)
        this.reCalculate();

    }

    updateQuantity(product : Product, quantity: number)
    {
        let line = this.Lines.find(line => line.product.id == product.id);
        if(line != undefined)
        {
            line.quantity = Number(quantity);
        }
        //call the recalc method to update cart(line)
        this.reCalculate();
    }

    removeLine(id : number)
    {
        let index = this.Lines.findIndex( line => line.product.id == id);
        this.Lines.splice(index,1);

        this.reCalculate();
    }

    clear()
    {
        this.Lines=[];
        this.itemCount=0;
        this.cartPrice=0;
    }

    //recalc product
    //calc product quantity * product price
    //count, price of item
    //product A
    //product b
    //product c
    //foreach looping as per the number of products that are updated

    private reCalculate()
    {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.Lines.forEach(l =>
            {
                this.itemCount += l.quantity;
                this.cartPrice += (l.quantity *l.product.price);
            }

        )
    }

}

export class CartLine
{
    constructor(public product : Product, public quantity : number)
    {

    }
    get lineTotal()
    {
        return this.quantity*this.product.price;
    }
}

//create, update, delete, clear cart, Recalc




