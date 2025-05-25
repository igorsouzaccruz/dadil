import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private readonly TOKEN_KEY = 'token';

  constructor() {}

  // Salvar token
  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Obter token
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Remover token
  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // Decodificar token
  getDecodedToken(): any | null {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode(token);
      } catch (error) {
        console.error('Erro ao decodificar token:', error);
        return null;
      }
    }
    return null;
  }

  // Obter dados do usuário
  getUser(): { username: string, email: string, roles: string[] } | null {
    const decoded = this.getDecodedToken();
    if (decoded) {
      return {
        username: decoded['unique_name'],
        email: decoded['email'],
        roles: Array.isArray(decoded['role']) ? decoded['role'] : [decoded['role']]
      };
    }
    return null;
  }

  // Verificar se está logado
  isLogged(): boolean {
    const token = this.getToken();
    if (!token) return false;

    const decoded: any = this.getDecodedToken();
    if (!decoded || !decoded.exp) return false;

    const expiryTime = decoded.exp * 1000; // em milissegundos
    return Date.now() < expiryTime;
  }
}