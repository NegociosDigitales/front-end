import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cliente } from '../models/clients';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  API_URI = 'http://localhost:5000';

  constructor(private http:HttpClient) { }

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.API_URI}/clients`);
  }

  getCliente( id: number):Observable<Cliente>{ 
    return this.http.get<Cliente>(`${this.API_URI}/clients/${id}`);
  }

  saveCliente(cliente: Cliente){
    return this.http.post(`${this.API_URI}/clients`,cliente);

  }

  deleteCliente(id: number){
    return this.http.delete(`${this.API_URI}/clients/${id}`);
  }

  updateCliente(id: number , updateCliente:Cliente){
   return this.http.put(`${this.API_URI}/clients/${id}`,updateCliente);
  }
}
