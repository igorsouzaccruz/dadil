import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router, public loginService: LoginService ) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
    this.loginService.buscarUsuarios().subscribe(usuarios => console.log(usuarios))

  }

  onSubmit(): void {
    this.errorMessage = '';
    this.isLoading = true;

    setTimeout(() => {
      if (this.email && this.password) {
        this.authService.login(this.email, this.password);
      } else {
        this.errorMessage = 'Por favor, preencha todos os campos.';
      }
      this.isLoading = false;
    }, 1000);
  }
}