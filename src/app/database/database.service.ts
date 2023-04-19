import { Injectable } from '@angular/core';
import { Product } from "../models/products";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cliente } from '../models/clients';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
//URL para consumir los productos
baseUrl = "http://localhost:5000/products";
baseUrlC = "http://localhost:5000/clients";
items: Product[] = []; //Productos vacíos iniciando

constructor(private http: HttpClient) {}


// GET
getItems(): Observable<Product[]> {
  return this.http.get<Product[]>(this.baseUrl);
}

getItemsCli(): Observable<Cliente[]> {
  return this.http.get<Cliente[]>(this.baseUrlC);
}
}
