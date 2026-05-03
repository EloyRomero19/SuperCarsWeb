import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';

interface Supercoche {
  id: string;
  marca: string;
  modelo: string;
  imagen: string;
  logo: string;
  motor: string;
  potencia: string;
  velocidadMaxima: string;
  aceleracion: string;
  par: string;
  traccion: string;
  peso: string;
  descripcion: string;
  etiqueta: string;
}

@Component({
  selector: 'app-modelos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modelos.component.html',
  styleUrl: './modelos.component.css'
})
export class ModelosComponent implements OnInit {

  coches: Supercoche[] = [];
  cardActiva: string | null = null;
  private readonly platformId = inject(PLATFORM_ID);

  async ngOnInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      const respuesta = await fetch('assets/data/modelos.json');
      this.coches = await respuesta.json() as Supercoche[];
    } catch (error) {
      console.error('Error al obtener modelos:', error);
    }
  }

  alternarCard(id: string): void {
    this.cardActiva = this.cardActiva === id ? null : id;
  }

  trackById(_: number, coche: Supercoche): string {
    return coche.id;
  }
}
