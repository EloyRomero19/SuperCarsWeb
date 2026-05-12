import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CochesService } from '../../servicios/coches.service';
import { Supercoche } from '../../interfaces/supercoche';

@Component({
  selector: 'app-modelos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modelos.component.html',
  styleUrl: './modelos.component.css'
})
export class ModelosComponent implements OnInit {

  coches: Supercoche[] = [];
  cardsActivas: string [] = [];

  constructor(private cochesService: CochesService) {}

  ngOnInit(): void {
    this.cochesService.obtenerModelos().subscribe({
      next: modelos => {
        this.coches = modelos;
      },
      error: error => {
        console.error('Error al obtener modelos:', error);
      }
    });
  }

  alternarCard(id: string): void {

    if(this.cardsActivas.includes(id)){
      this.cardsActivas = this.cardsActivas.filter(c => c !== id);
    }else{
      this.cardsActivas.push(id);
    }
  }

  trackById(_: number, coche: Supercoche): string {
    return coche.id;
  }
}
