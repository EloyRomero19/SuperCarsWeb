import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Noticia {
  fecha: string;
  titulo: string;
  imagen?: string;
  video?: string;
  resumen: string;
  contenido: string;
}

interface NoticiasResponse {
  noticias: Noticia[];
}

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private noticiasUrl = 'assets/data/noticias.json';

  constructor(private http: HttpClient) { }

  obtenerNoticias(): Observable<NoticiasResponse> {
    return this.http.get<NoticiasResponse>(this.noticiasUrl);
  }
}
