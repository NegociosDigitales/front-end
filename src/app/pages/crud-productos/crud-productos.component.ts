import { Component, HostBinding, OnInit } from '@angular/core';
import { Product } from '../../models/products';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from 'src/app/database/database.service';
import { MessageService } from "primeng/api";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'app-crud-productos',
  templateUrl: './crud-productos.component.html',
  styleUrls: ['./crud-productos.component.css'],
  providers: [MessageService]
})

export class CrudProductosComponent implements OnInit {
  @HostBinding ('class') classes='row';

  producto:Product={
    id: 0,
    name: '',
    price: 0,
    description: '',
    stock: 0,
    images: [''],
    quantity: 0
  }
  productos:Product[] = [];

  edit :boolean =false;


  constructor( private primengConfig: PrimeNGConfig,private messageService: MessageService,private productsService:ProductsService, private router:Router, private activedRoute:ActivatedRoute,private database:DatabaseService ) {
    this.listar();
   }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    const params=this.activedRoute.snapshot.params;
    if(params ['id']){
    
      this.productsService.getProducto(params['id']).subscribe((resp:Product) => {
        this.producto=resp;
      });

  }

}//ngOnInit

listar(){
  this.database.getItems().subscribe(res => {
      console.log(res);
      this.productos = res;
    });
}

saveNewProducto(){
  this.productsService.saveProducto(this.producto).subscribe(
    resp=>{
      console.log(resp);
      this.router.navigate(['products']);
      this.listar();
    },
    err => console.error(err)
  );
  console.log(this.producto);
  this.listar();
  this.edit=false;

    this.messageService.add({
      severity: "success",
      detail: "Producto Agregado",
    });

}

updateProducto(id : number){

  let number : number= Number(this.producto.id);
  this.productsService.updateProducto(number,this.producto).subscribe(
    resp=>{
      console.log(resp);
      this.router.navigate(['products']);
          this.listar();
    },
    err=>console.error(err)
  );
    this.edit=false;

    this.messageService.add({
      severity: "success",
      detail: "Producto Actualizado",
    });

}

getProductos(){
  this.productsService.getProductos().subscribe(
    resp=> {
      this.productos =resp;
    },
    err=> console.error(err)
  );
}



deleteProducto(id : number){
  console.log(id);
  this.productsService.deleteProducto(id).subscribe(
    resp=>{
      console.log(resp);
      this.getProductos();
    },
    err=>console.error(err)
      );
        this.edit=false;
        this.messageService.add({
          severity: "success",
          detail: "Producto Eliminado",
        });

}
fillData(product: Product){
  this.producto=product;
   this.edit=true;
}
}//final