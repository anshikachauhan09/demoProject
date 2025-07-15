import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    const result = this.auth.login(this.username, this.password);
    if (result.success) {
      if (result.role === 'admin') this.router.navigate(['/manage-orders']);
      else this.router.navigate(['/track-orders']);
    } else {
      alert('Invalid credentials');
    }
  }
}