import {
  Component,
  AfterViewInit,
  Inject,
  OnInit,
  PLATFORM_ID
} from '@angular/core';

import {
  CommonModule,
  isPlatformBrowser
} from '@angular/common';
import { Noticia, NoticiasService } from '../../servicios/noticias.service';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent implements OnInit, AfterViewInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private noticiasService: NoticiasService
  ) {}

  noticiaSeleccionada: Noticia | null = null;
  noticiaPortada: Noticia | null = null;
  noticias: Noticia[] = [];

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.noticiasService.obtenerNoticias().subscribe({
      next: (data) => {
        this.noticiaPortada = data.portada;
        this.noticias = data.noticias;
      },
      error: (error) => {
        console.error('Error al cargar las noticias', error);
      }
    });
  }

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      const videos = document.querySelectorAll('video');

      videos.forEach((video: HTMLVideoElement) => {
        video.muted = true;
        video.volume = 0;
      });

    }
  }

  abrirModal(noticia: Noticia) {
    this.noticiaSeleccionada = noticia;
  }

  cerrarModal() {
    this.noticiaSeleccionada = null;
  }
}
