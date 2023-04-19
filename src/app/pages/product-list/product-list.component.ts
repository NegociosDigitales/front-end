import { Component, OnInit } from '@angular/core';
import {  Product } from '../../models/products';
import { DatabaseService } from 'src/app/database/database.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  productos: Product [] = [];
  

  compartir() {
    window.alert('¡El producto ha sido compartido!');
  }

  onNotify() {
    window.alert('Será notificado cuando el producto este disponible');
  }
  
  
  constructor(private database:DatabaseService) {
    this.database.getItems().subscribe(res => {
      console.log(res);
      this.productos = res;
    });
  }

  ngOnInit(): void {
  }

}
