import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { CartStore } from '../../core/store/cart.store';
import { IProduct } from '../../core/models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  newProduct =
    {
      "_id": "1",
      "name": "name product 2",
      "price": 200,
      "description": "description product 2",
    }
  productos = signal<IProduct[]>([])

  cartStore = inject(CartStore)

  constructor(){
    effect(()=>{
      console.log(this.productos())
    })
  }
  ngOnInit(): void {
    this.getProducts()
  }


  getProducts() {

    this.productos.set(this.cartStore.products());
  }

  onAddToProduct() {
    this.cartStore.addToCart(this.newProduct)
    this.getProducts()
  }

}