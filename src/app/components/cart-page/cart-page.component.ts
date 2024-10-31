import {Component, Input, OnInit} from '@angular/core';

import {Carts} from '../../shared/models/Carts';
import {CartService} from '../../services/cart.service';
import {CartItem} from '../../shared/models/CartItem';
import {FoodService} from "../../services/food/food.service";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{

  @Input()
  nbItem:number;

  cart!: Carts;

  constructor(private cartService: CartService, private foodService: FoodService) {
    let foods= foodService.getAll();
   /* remove after design
   cartService.addToCart(foods[1])
    cartService.addToCart(foods[3])
    cartService.addToCart(foods[5])

    */

    this.setCar();
  }


  ngOnInit(): void {
  }

  setCar(){
    this.cart= this.cartService.getCart()
  }

  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id)
    this.setCar(); //instance load Data
  }

  changeQuantity(cartItem: CartItem, quantityInString: string){
    const quantity =parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCar();
  }
}
