import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  role: string = '';

  login(username: string, password: string): { success: boolean, role?: string } {
    if (username === 'admin' && password === 'admin123') {
      this.role = 'admin';
      return { success: true, role: 'admin' };
    } else if (username === 'user' && password === 'user123') {
      this.role = 'user';
      return { success: true, role: 'user' };
    } else {
      return { success: false };
    }
  }

  isAdmin(): boolean {
    return this.role === 'admin';
  }

  isUser(): boolean {
    return this.role === 'user';
  }
}