import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Noticia, NoticiasResponse } from '../interfaces/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private noticiasUrl = 'assets/data/noticias.json';

  constructor(private http: HttpClient) { }

  obtenerNoticias(): Observable<NoticiasResponse> {
    return this.http.get<NoticiasResponse>(this.noticiasUrl);
  }

  obtenerNoticiaPorId(id: string): Observable<Noticia | undefined> {
    return this.obtenerNoticias().pipe(
      map(data => [data.portada, ...data.noticias].find(noticia => noticia.id === id))
    );
  }
}
