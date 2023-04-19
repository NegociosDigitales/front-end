import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '././.././../services/cart.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from "primeng/api";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
  ,
  providers: [MessageService]
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  total = this.cartService.getTotal();
  showSuccess: boolean = true;




  constructor(private primengConfig: PrimeNGConfig ,private cartService: CartService, private formBuilder: FormBuilder,private messageService: MessageService){}
 
  public payPalConfig?: IPayPalConfig;
  
  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.initConfig();
    
  }
  

  private initConfig(): void {
    this.payPalConfig = {
    currency: 'MXN',
    clientId: 'Ae68SI0id7zzl40BK4wAt0XyU6TDkD5UVHhB7yjdkutKrXKe5fq-CsovTP6gvvhDi6ZqJy8vLWC5wIBl',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'MXN',
            value: this.total.toString(),
            breakdown: {
              item_total: {
                currency_code: 'MXN',
                value: this.total.toString(),
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'MXN',
                value: this.total.toString(),
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then((details: any) => {
         
        this.showSuccess = true;
        this.messageService.add({ severity: 'success', detail: 'Compra realizada correctamente'});
       
        this.items = this.cartService.clearCart();
        this.total = this.cartService.getTotal();
     
       });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      this.showSuccess = true;
       
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }


  onSubmit(): void{
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted');
   
  }


}
