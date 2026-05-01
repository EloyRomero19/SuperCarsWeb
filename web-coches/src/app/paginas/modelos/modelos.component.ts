import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CochesService } from '../../servicios/coches.service';
@Component({
  selector: 'app-modelos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modelos.component.html',
  styleUrl: './modelos.component.css'
})
export class ModelosComponent implements OnInit {

  coches: any[] = [];

  constructor(private cochesService: CochesService) {}

  ngOnInit(): void {
    this.cochesService.obtenerCochesFerrari().subscribe({
      next: (data: any[]) => {
        this.coches = data;
      },
      error: (error: any) => {
        console.error('Error al obtener coches:', error);
      }
    });
  }
}

