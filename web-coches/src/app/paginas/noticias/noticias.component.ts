import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import {
  CommonModule,
  isPlatformBrowser
} from '@angular/common';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent implements AfterViewInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      const videos = document.querySelectorAll('video');

      videos.forEach((video: HTMLVideoElement) => {
        video.muted = true;
        video.volume = 0;
      });

    }
  }

  noticiaSeleccionada: any = null;

  noticias = [
    {
      fecha: '28 de enero de 2026',
      titulo: 'Ferrari presenta su nuevo superdeportivo de 840 CV',
      imagen: 'assets/imagenes/FERRARIDAYTONA.jpeg',
      resumen: 'Ferrari ha desvelado su último supercoche, combinando potencia brutal, eficiencia y ADN deportivo.',
      contenido: 'Ferrari ha presentado el Daytona SP3 como uno de los proyectos más emocionales y exclusivos de su historia reciente...'
    },

    {
      fecha: '24 de enero de 2026',
      titulo: 'Porsche 911 GT3 RS 992 incorpora DRS de competición',
      video: 'https://res.cloudinary.com/doiaqcxy9/video/upload/q_auto,f_auto,w_960/From_KlickPin_CF_A_landmark_in_any_city_trvu3m.mp4',
      resumen: 'El nuevo GT3 RS adopta aerodinámica activa inspirada en la Fórmula 1.',
      contenido: 'El nuevo 911 GT3 RS representa el enfoque más radical que Porsche ha aplicado jamás a un modelo de calle...'
    },

    {
      fecha: '20 de enero de 2026',
      titulo: 'Mercedes AMG Project One rompe récord en Nürburgring',
      imagen: 'assets/imagenes/projectone2.jpeg',
      resumen: 'Más potencia, menos peso y una puesta a punto extrema para circuito.',
      contenido: 'El Mercedes AMG Project One es probablemente el hiperdeportivo más cercano a un monoplaza de Fórmula 1...'
    },

    {
      fecha: '13 de enero de 2026',
      titulo: 'Track days: la forma más barata de exprimir tu superdeportivo',
      video: 'https://res.cloudinary.com/doiaqcxy9/video/upload/q_auto,f_auto,w_960/From_KlickPin_CF_%D0%9F%D0%B8%D0%BD_%D0%BE%D1%82_%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F_Haroldo_Grave_%D0%BD%D0%B0_%D0%B4%D0%BE%D1%81%D0%BA%D0%B5_Instagram___%D0%90%D0%B2%D1%82%D0%BE%D1%81%D0%BF%D0%BE%D1%80%D1%82_%D0%A1%D0%BF%D0%BE%D1%80%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B5_%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8_%D0%A1%D1%83%D0%BF%D0%B5%D1%80%D0%BA%D0%B0%D1%80%D1%8B_n5wsad.mp4',
      resumen: 'Rodar en circuito mejora técnica, seguridad y sensaciones.',
      contenido: 'Los track days se han convertido en la forma más segura y emocionante de disfrutar un superdeportivo...'
    },

    {
      fecha: '10 de enero de 2026',
      titulo: 'Frenos carbocerámicos: resistencia infinita',
      imagen: 'assets/imagenes/frenosCarbo.jpeg',
      resumen: 'Aguantan temperaturas extremas sin fatiga y reducen peso.',
      contenido: 'Los frenos carbocerámicos se han convertido en un elemento imprescindible en los superdeportivos modernos...'
    }
  ];

  abrirModal(noticia: any) {
    this.noticiaSeleccionada = noticia;
  }
}
