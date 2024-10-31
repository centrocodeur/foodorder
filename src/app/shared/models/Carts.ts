import {CartItem} from "./CartItem";

export class Carts{
  items: CartItem[]= [];

  get totalPrice(): number{
    let totalPrice = 0;
    this.items.forEach(item=>{
      totalPrice+= item.price;
    });

    return totalPrice;
  }
}
