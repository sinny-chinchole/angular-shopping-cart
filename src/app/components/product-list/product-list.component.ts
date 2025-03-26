import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products: Product[] = [
    { id: 1, product: 'Burger', price: 399, image: '/assets/images/burger.jpg' },
    { id: 2, product: 'Coffee', price: 599, image: '/assets/images/coffee.png' },
    { id: 3, product: 'Pizza', price: 499, image: '/assets/images/pizza.png' },
    { id: 4, product: 'Coke', price: 99, image: '/assets/images/coke.png' }
  ]

  constructor(private cartService: CartService ){

  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
