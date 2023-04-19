import { Component, OnInit, HostBinding} from '@angular/core';
import { Cliente } from '../../models/clients';
import {ClientService} from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from 'src/app/database/database.service';
import { MessageService } from "primeng/api";
import { PrimeNGConfig } from "primeng/api";


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [MessageService]

})
export class ClientesComponent implements OnInit {
  @HostBinding ('class') classes='row';
  cliente:Cliente={
    id: 0,
    name: '',
    type:''
  }
  clientes:Cliente[] = [];

  edit :boolean =false;

  constructor( private messageService: MessageService, private primengConfig: PrimeNGConfig,private cliService:ClientService, private router:Router, private activedRoute:ActivatedRoute,private database:DatabaseService ) { 
    this.listar();
  }

  ngOnInit(): void {

    this.primengConfig.ripple = true;

    const params=this.activedRoute.snapshot.params;
    if(params ['id']){
    
      this.cliService.getCliente(params['id']).subscribe((resp:Cliente) => {
        this.cliente=resp;
      });
  }

}//ngOnInit

listar(){
  this.database.getItemsCli().subscribe(res => {
    console.log(res);
   this.clientes=res;
  });
}

saveNewCliente(){
 
  this.cliService.saveCliente(this.cliente).subscribe(
    resp=>{
      console.log(resp);
      this.router.navigate(['clients']);
      this.listar();
    },
    err => console.error(err)
    
  );

  console.log(this.cliente);
  this.edit=false;
  this.messageService.add({
    severity: "success",
    detail: "Cliente Agregado",
  });

}

updateCliente(id : number){
 
 
  let number : number= Number(this.cliente.id);
  this.cliService.updateCliente(number,this.cliente).subscribe(
    resp=>{
      console.log(resp);
      this.router.navigate(['clients']);
      this.listar();
    },
    err=>console.error(err)
  );
  this.edit=false;

  this.messageService.add({
    severity: "success",
    detail: "Cliente actualizado",
  });

}

getClientes(){
  this.cliService.getClientes().subscribe(
    resp=> {
      this.clientes =resp;
    },
    err=> console.error(err)
  );
}



deleteCliente(id : number){
  console.log(id);
  this.cliService.deleteCliente(id).subscribe(
    resp=>{
      console.log(resp);
      this.getClientes();
    },
    err=>console.error(err)
      );
    this.edit=false;  
    this.messageService.add({
      severity: "success",
      detail: "Cliente eliminado",
    });

}

fillData(cliente: Cliente){
  this.cliente=cliente;
  this.edit=true;
 
}


}//final
