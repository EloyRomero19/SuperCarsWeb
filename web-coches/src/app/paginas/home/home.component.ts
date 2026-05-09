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
  isDragging = false;

  private dragStartX = 0;
  private dragStartRotation = 0;
  private activePointerId: number | null = null;
  private readonly dragSensitivity = .35;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      const videos = document.querySelectorAll('video');

      videos.forEach((video: HTMLVideoElement) => {
        video.muted = true;
        video.defaultMuted = true;
        video.volume = 0;

        video.play().catch(() => {});

        setTimeout(() => {
          video.play().catch(() => {});
        }, 500);

        setTimeout(() => {
          video.play().catch(() => {});
        }, 1500);
      });

    }
  }

  nextSlide() {
    this.rotation -= 360 / this.galeria.length;
  }

  prevSlide() {
    this.rotation += 360 / this.galeria.length;
  }

  onCarouselPointerDown(event: PointerEvent): void {
    if (event.button !== 0) {
      return;
    }

    this.isDragging = true;
    this.dragStartX = event.clientX;
    this.dragStartRotation = this.rotation;
    this.activePointerId = event.pointerId;

    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  }

  onCarouselPointerMove(event: PointerEvent): void {
    if (!this.isDragging || event.pointerId !== this.activePointerId) {
      return;
    }

    const movement = event.clientX - this.dragStartX;
    this.rotation = this.dragStartRotation + movement * this.dragSensitivity;
  }

  onCarouselPointerEnd(event: PointerEvent): void {
    if (!this.isDragging || event.pointerId !== this.activePointerId) {
      return;
    }

    const step = 360 / this.galeria.length;
    this.rotation = Math.round(this.rotation / step) * step;
    this.isDragging = false;
    this.activePointerId = null;

    const carousel = event.currentTarget as HTMLElement;

    if (carousel.hasPointerCapture(event.pointerId)) {
      carousel.releasePointerCapture(event.pointerId);
    }
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
