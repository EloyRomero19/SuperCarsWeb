import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  galeria = [
    'assets/imagenes/svj.jpg',
    'assets/imagenes/porsche.jpg',
    'assets/imagenes/jesko.jpg',
    'assets/imagenes/f40.jpg',
    'assets/imagenes/amg.jpg',
    'assets/imagenes/bmwm8.jpg'
  ];

  rotation = 0;
  radius = 420;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      const videos = document.querySelectorAll('video');

      videos.forEach((video: HTMLVideoElement) => {
        video.muted = true;
        video.volume = 0;
        video.load();

        video.addEventListener(
          'canplay',
          () => video.play().catch(() => {}),
          { once: true }
        );
      });

    }
  }

  nextSlide() {
    this.rotation -= 360 / this.galeria.length;
  }

  prevSlide() {
    this.rotation += 360 / this.galeria.length;
  }

  getTransform(i: number): string {
    const step = 360 / this.galeria.length;

    return `
      translate(-50%, -50%)
      rotateY(${step * i}deg)
      translateZ(${this.radius}px)
    `;
  }

  getActive(i: number): boolean {
    const step = 360 / this.galeria.length;

    const index =
      ((-this.rotation / step) % this.galeria.length + this.galeria.length)
      % this.galeria.length;

    return Math.round(index) === i;
  }
}
