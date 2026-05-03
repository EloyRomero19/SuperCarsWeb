import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  galeria: string[] = [
    'assets/imagenes/amg.jpg',
    'assets/imagenes/bmwm8.jpg',
    'assets/imagenes/bugatty1_imagen.png'
  ];

  activeIndex: number = 0;

  ngOnInit(): void {}

  nextSlide(): void {
    this.activeIndex = (this.activeIndex + 1) % this.galeria.length;
  }

  prevSlide(): void {
    this.activeIndex =
      (this.activeIndex - 1 + this.galeria.length) % this.galeria.length;
  }

  getSlideClass(i: number): string {
    const total = this.galeria.length;
    const diff = (i - this.activeIndex + total) % total;

    if (diff === 0) return 'active';
    if (diff === 1) return 'right';
    if (diff === total - 1) return 'left';

    return 'd-none';
  }
}
