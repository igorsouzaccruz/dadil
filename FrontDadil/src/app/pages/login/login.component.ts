import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  user: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    public loginService: LoginService
  ) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
    this.loginService
      .buscarUsuarios()
      .subscribe((usuarios) => console.log(usuarios));
  }

  onSubmit(): void {
    this.errorMessage = '';
    this.isLoading = true;
    debugger;

    if (this.user && this.password) {
      this.authService.login(this.user, this.password).subscribe({
        next: () => {
          this.isLoading = false;
          // redirecionamento já acontece no service
        },
        error: (err) => {
          this.errorMessage = 'Login inválido';
          this.isLoading = false;
        },
      });
    } else {
      this.errorMessage = 'Por favor, preencha todos os campos.';
      this.isLoading = false;
    }
  }
}
