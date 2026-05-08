import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CochesService {

  private modelosUrl = 'assets/data/modelos.json';
  private apiUrl = 'https://api.api-ninjas.com/v1/cars';
  private apiKey = 'TU_API_KEY_AQUI';

  constructor(private http: HttpClient) {}

  obtenerModelos(): Observable<any[]> {
    return this.http.get<any[]>(this.modelosUrl);
  }

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
