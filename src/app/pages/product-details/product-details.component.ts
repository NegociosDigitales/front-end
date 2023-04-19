import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '././.././../services/cart.service';
import { Product, products } from '../../models/products';
import { MessageService } from "primeng/api";
import { PrimeNGConfig } from "primeng/api";


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [MessageService]
})
export class ProductDetailsComponent implements OnInit {

  product:Product | undefined;
  productos = this.cartService.getItems();


  constructor(private messageService: MessageService,private route: ActivatedRoute, private cartService: CartService, private primengConfig: PrimeNGConfig
    ){

  }
  ngOnInit(): void {
  this.primengConfig.ripple = true;
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));
  this.product = products.find(product => product.id === productIdFromRoute);
  
  }

  addToCart(product: Product){ //Añade el producto actual al carrito

    this.messageService.add({
      severity: "success",
      detail: "Se agrega al carrito de compras",
    });

    let producto = this.productos.find((p) => p.id === product.id);
    
    if (!producto) {
      console.log("Agregando producto " + JSON.stringify(product));
      let p = {
        id: product.id,
        name: product.name,
        description: product.description,
        stock:product.stock,
        images:product.images,
        price: product.price,
        quantity:1      };
      this.cartService.addToCart(p);
    }else{
      let total=producto.quantity++;
      let index=this.productos.findIndex((p)=>p.id==product.id);
      this.productos[index]=producto;
    }
//No se encontro el producto
  }


}
