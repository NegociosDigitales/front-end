import { Component, Inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from "@auth0/auth0-angular";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  items: MenuItem[]=[];
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {}

  login() {
    this.auth.loginWithRedirect();
  }


  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.document.location.origin,
      },
    });
  }


  ngOnInit(): void {
    this.items = [
      {
        icon: 'pi pi-fw pi-home',
        routerLink: '/',
        label:'Home'
         
      },
      {
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: '/cart',
        label:'Carrito'
         
      },
      {
        icon: 'pi pi-fw pi-box',
        routerLink: '/crud',
        label:'Productos'
         
      },
      {
        icon: 'pi pi-fw pi-star',
        routerLink: '/clientes',
        label:'Clientes'
          
      },
      {
        icon: 'pi pi-fw pi-user',
        routerLink: '/login',
        label:'Login'
      }
  ];
}
  }


