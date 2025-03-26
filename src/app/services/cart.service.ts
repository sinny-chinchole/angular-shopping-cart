import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(product: Product) {
    let currentItems = this.cartItems.value;
    currentItems.push({ ...product });
    this.cartItems.next(currentItems);
  }

  getCartItems() {
    return this.cartItems.asObservable();
  }

  clearCart() {
    this.cartItems.next([]);
  }
  

  constructor() { }
}
