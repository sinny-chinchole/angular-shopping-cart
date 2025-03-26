import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems: Product[]= []

  constructor(private cartService: CartService){
    this.cartService.getCartItems().subscribe(items => this.cartItems = items);
  }
  ddToCart(product: Product) {
    this.cartItems.push(product);
    console.log("Cart Updated:", this.cartItems);
  }

  // removeFromCart(product: Product) {
  //   this.cartItems = this.cartItems.filter(item => item.id !== product.id);
  // }

  buyNow() {
    console.log('Cart Items:', JSON.stringify(this.cartItems, null, 2));
  }
  

}
