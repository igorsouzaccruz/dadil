import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:44364/api/Auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(userName: string, password: string): Observable<any> {
    const body = { userName, password };

    return this.http.post(`${this.apiUrl}/login`, body).pipe(
      tap((res: any) => {
        // Salva o token no localStorage
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);

        // Redireciona para o dashboard
        this.router.navigate(['/dashboard']);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.router.navigate(['/login']);
  }
}
