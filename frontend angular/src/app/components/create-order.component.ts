import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html'
})
export class CreateOrderComponent {
  customer = '';
  status = '';

  constructor(private orderService: OrderService) {}

  create() {
    this.orderService.createOrder({ customer: this.customer, status: this.status })
      .subscribe(() => alert('Order Created!'));
  }
}