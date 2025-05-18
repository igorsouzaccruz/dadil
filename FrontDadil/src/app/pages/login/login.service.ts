import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'https://localhost:44364/api/Usuarios';

 constructor(private http: HttpClient) {}

    
  public buscarUsuarios(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
