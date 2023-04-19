import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  total: number = 0;
  

  constructor(private http: HttpClient) {
  }

  addToCart(product: Product){ // Agrega un producto a una matriz de elementos
    this.items.push(product);
  }
  getItems() {// Recopila los articulos que  los usuarios agregan al carrito
    return this.items;
  }
  clearCart(){ //Devuelve la matriz vacia de elementos, que vacia el carrito
    this.items = [];
    return this.items;
  }
  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

   //Total de compra en carrito de compra.
   setTotal(total:number) {
    this.total = total;
  }


  //Obtener el total de la compra
  getTotal() {
    return this.total;
  }

}