import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html'
})
export class ManageOrdersComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe((data: any) => {
      this.orders = data;
    });
  }
}