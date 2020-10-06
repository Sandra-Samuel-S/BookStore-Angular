//import { Cart } from './cart.model';
import { ProductRepository } from './../../Model/product.repository';
import { Product } from './../../Model/product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from './cart.model';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit 
{
  public selectedGenre = null;

  public productsPerPage = 4;
  public selectedPage= 1;

  constructor(private repository : ProductRepository,
                    private cart :  Cart,
                  private router : Router)
   { }

  ngOnInit(): void {
  }

  get products() : Product[]
  {
    let pageIndex = (this.selectedPage -1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedGenre)
    .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get genres() : string[]
  {
    return this.repository.getGenres();
  }

  changeGenre(newGenre? : string)
  {
    this.selectedGenre= newGenre;
  }

  changePage(newPage : number)
  {
    this.selectedPage = newPage;

  }

  changePageSize( newSize:number)
  {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageNumbers() : number[]
  {
    return Array(Math.ceil(this.repository
      .getProducts(this.selectedGenre).length/this.productsPerPage))
      .fill(0).map((x,i)=>1+i);
  }

  addProductToCart(Product : Product)
  {
    this.cart.addLine(Product);
    this.router.navigateByUrl("/cart");
  }

}
