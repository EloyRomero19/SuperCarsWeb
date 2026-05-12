import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supercoche } from '../interfaces/supercoche';

@Injectable({
  providedIn: 'root'
})
export class CochesService {

  private modelosUrl = 'data/modelos.json';
  private apiUrl = 'https://api.api-ninjas.com/v1/cars';
  private apiKey = 'TU_API_KEY_AQUI';

  constructor(private http: HttpClient) {}

  obtenerModelos(): Observable<Supercoche[]> {
    return this.http.get<Supercoche[]>(this.modelosUrl);
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
