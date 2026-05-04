import { Component, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PLATFORM_ID, inject } from '@angular/core';

interface SeleccionPrestige {
  titulo: string;
  categoria: string;
  imagen: string;
  descripcion: string;
}

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sobre-nosotros.component.html',
  styleUrl: './sobre-nosotros.component.css'
})
export class SobreNosotrosComponent implements OnInit {
  seleccionPrestige: SeleccionPrestige[] = [];
  private readonly platformId = inject(PLATFORM_ID);

  async ngOnInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      const respuesta = await fetch('assets/data/seleccion-prestige.json');
      this.seleccionPrestige = await respuesta.json() as SeleccionPrestige[];
    } catch (error) {
      console.error('Error al cargar la seleccion prestige:', error);
    }
  }

  irASeleccion(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const seleccion = document.getElementById('seleccion-prestige');

    if (!seleccion) {
      return;
    }

    window.scrollTo({
      top: seleccion.getBoundingClientRect().top + window.scrollY - 84,
      behavior: 'smooth'
    });
  }
}
