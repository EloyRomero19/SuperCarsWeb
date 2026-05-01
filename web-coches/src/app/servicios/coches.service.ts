import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CochesService {

  private apiUrl = 'https://api.api-ninjas.com/v1/cars';
  private apiKey = 'TU_API_KEY_AQUI';

  constructor(private http: HttpClient) {}

  obtenerCochesFerrari(): Observable<any[]> {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey
    });

    return this.http.get<any[]>(`${this.apiUrl}?make=ferrari`, { headers });
  }

  obtenerCochesPorMarca(marca: string): Observable<any[]> {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey
    });

    return this.http.get<any[]>(`${this.apiUrl}?make=${marca}`, { headers });
  }
}
