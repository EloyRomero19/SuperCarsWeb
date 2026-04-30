import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CochesService } from '../../servicios/coches.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  cochesDestacados: any[] = [];

  constructor(private cochesService: CochesService) {}

  ngOnInit(): void {
    this.cochesService.obtenerCochesFerrari().subscribe({
      next: (data: any[]) => {
        this.cochesDestacados = data.slice(0, 3);
      },
      error: (error: any) => {
        console.error('Error al cargar coches:', error);
      }
    });
  }
}
