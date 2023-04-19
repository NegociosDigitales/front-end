import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Product, products } from '../../models/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() producto: Product | undefined;
  @Output() notificar = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
