import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CochesService } from '../../servicios/coches.service';

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

  constructor(private cochesService: CochesService) {}

  ngOnInit(): void {
    this.cochesService.obtenerModelos().subscribe({
      next: modelos => {
        this.coches = modelos as Supercoche[];
      },
      error: error => {
        console.error('Error al obtener modelos:', error);
      }
    });
  }

  alternarCard(id: string): void {
    this.cardActiva = this.cardActiva === id ? null : id;
  }

  trackById(_: number, coche: Supercoche): string {
    return coche.id;
  }
}
