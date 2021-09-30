import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shopping_cart_items: any[]=[];

  constructor() { }
  addProduct = (product: any)=>{
    let items = this.get_shopping_cart_items();

    if(items){
      items.push(product)
      localStorage.setItem('cart_items', JSON.stringify(items))
    }
    else{
      this.shopping_cart_items.push(product);
      localStorage.setItem('cart_items', JSON.stringify(this.shopping_cart_items))
    }
    //localStorage.setItem('shopping_cart',JSON.stringify(product))
  }
  get_shopping_cart_items = ()=>{
    
    let items = localStorage.getItem('cart_items')
    return JSON.parse(items || "null") 
    /* JSON.parse accepts an arg of type string

        localStorage.getItem returns an arg of 
        type string or null (if its not found)
        therefore you can add a quick default value
        set before the parse so inlcude null
*/
  }
}
