import { Component, inject, signal } from '@angular/core';
import { CartStore } from '../../core/store/cart.store';
import { IProduct } from '../../core/models/product.model';

@Component({
  selector: 'app-cart2',
  standalone: true,
  imports: [],
  templateUrl: './cart2.component.html',
  styleUrl: './cart2.component.css'
})
export class Cart2Component {

  products = signal<IProduct[]>([])
  cartStore = inject(CartStore)

  ngOnInit(): void {
    this.getProducts()
  }


  getProducts() {

    this.products.set(this.cartStore.products());
  }
}
