import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from './jwt.service'; // garante que você tenha isso
import { environment } from '../../environments/environment';
import { Denuncia } from '../core/denuncia.model';


@Injectable({
  providedIn: 'root'
})
export class DenunciaService {
  private apiUrl = `${environment.apiUrl}/api/Denuncias`;

  constructor(private http: HttpClient, private jwtService: JwtService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.jwtService.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  getAllDenuncias(): Observable<Denuncia[]> {
    return this.http.get<Denuncia[]>(this.apiUrl, {
      headers: this.getAuthHeaders(),
    });
  }

  createDenuncia(denuncia: Denuncia): Observable<any> {
    return this.http.post(this.apiUrl, denuncia, {
      headers: this.getAuthHeaders(),
    });
  }
}