import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URI = 'http://localhost:5000';

  constructor(private http:HttpClient) { }

  getProductos():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.API_URI}/products`);
  }

  getProducto( id: number):Observable<Product>{ 
    return this.http.get<Product>(`${this.API_URI}/products/${id}`);
  }

  saveProducto(producto: Product): Observable<any> {
    return this.http.post(`${this.API_URI}/products`,producto);

  }

  deleteProducto(id: number): Observable<any> {
    try{
      return this.http.delete(`${this.API_URI}/products/${id}`);
    }catch(error){
      return this.http.delete(`${this.API_URI}/products/${id}`);
    } 
  }

  updateProducto(id: number , updateProducto:Product): Observable<any> {
   return this.http.put(`${this.API_URI}/products/${id}`,updateProducto);
  }
}
