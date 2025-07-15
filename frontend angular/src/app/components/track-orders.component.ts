import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-track-orders',
  templateUrl: './track-orders.component.html'
})
export class TrackOrdersComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe((data: any) => {
      this.orders = data;
    });
  }
}