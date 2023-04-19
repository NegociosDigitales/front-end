import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductAlertsComponent } from './pages/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { TopBarComponent } from './pages/top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import { LoginComponent } from './pages/login/login.component';
import { CrudProductosComponent } from './pages/crud-productos/crud-productos.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { MenubarModule } from 'primeng/menubar';
import { HomeComponent } from './pages/home/home.component';
import {DividerModule} from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { AuthModule } from '@auth0/auth0-angular';
import { NgxPayPalModule } from 'ngx-paypal';




@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ProductComponent,
    CartComponent,
    ShippingComponent,
    LoginComponent,
    CrudProductosComponent,
    ClientesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CardModule,
    DialogModule,
    ToastModule,
    FormsModule, 
    ReactiveFormsModule, 
    NgxCaptchaModule,
    MenubarModule,
    NgxPayPalModule,
    DividerModule,
    TableModule,
    AuthModule.forRoot({
      domain: 'dev-5q6cpfa3orecw2fy.us.auth0.com',
      clientId: 'veNMaFYZvYDnDdBEG7cbdu03R3mUHZjl',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'products/:productId', component: ProductDetailsComponent},
      {path: 'cart', component:CartComponent},
      {path: 'shipping', component: ShippingComponent},
      {path: 'login', component: LoginComponent},
      {path: 'crud', component: CrudProductosComponent},
      {path: 'clientes', component: ClientesComponent},
      {path: 'productos', component: ProductListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
