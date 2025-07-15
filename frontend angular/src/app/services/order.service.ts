import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private API = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get(`${this.API}/orders`);
  }

  createOrder(order: any) {
    return this.http.post(`${this.API}/orders`, order);
  }
}