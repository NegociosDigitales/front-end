import { Component, OnInit, Input } from '@angular/core';
import { Product,products } from '../../models/products';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CartService } from '././.././../services/cart.service';
import { MessageService } from "primeng/api";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
,
  providers: [MessageService]

})
export class ProductComponent implements OnInit {
  @Input() producto!: Product;

  productos = this.cartService.getItems();

  compartir() {
    this.messageService.add({
      severity:"success",
      detail:"¡Se ha compartido el producto ☺!"  });
  }

  onNotify() {
    this.messageService.add({
      severity:"success",
      detail:"¡Se notificará cuando haya stock del producto! ☺"  });
  }

  display: boolean = false;
  showDialog() {
    this.display = true;
  }

  constructor(private cartService: CartService,  private messageService: MessageService,
    private primengConfig: PrimeNGConfig
){

  }
  addToCart(product: Product){ //Añade el producto actual al carrito
    this.messageService.add({
    severity:"success",
    detail:"Se ha agregado al carrito"  });

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
    }//fin else
    //total
   let total = 0;
    this.productos.forEach( (p: Product) => {
      total += (p.quantity * p.price);
      this.cartService.setTotal(total);
    })
  }//fin método

  ngOnInit() {
    this.primengConfig.ripple = true;
    
  }



}
