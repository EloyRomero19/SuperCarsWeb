export interface Noticia {
  id: string;
  fecha: string;
  titulo: string;
  imagen?: string;
  video?: string;
  resumen: string;
  contenido: string;
}

export interface NoticiasResponse {
  portada: Noticia;
  noticias: Noticia[];
}
