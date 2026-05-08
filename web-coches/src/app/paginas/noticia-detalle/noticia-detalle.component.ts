import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Noticia } from '../../interfaces/noticia';
import { NoticiasService } from '../../servicios/noticias.service';

@Component({
  selector: 'app-noticia-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './noticia-detalle.component.html',
  styleUrl: './noticia-detalle.component.css'
})
export class NoticiaDetalleComponent implements OnInit {

  noticia?: Noticia;
  cargando = true;

  constructor(
    private route: ActivatedRoute,
    private noticiasService: NoticiasService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.cargando = false;
      return;
    }

    this.noticiasService.obtenerNoticiaPorId(id).subscribe({
      next: noticia => {
        this.noticia = noticia;
        this.cargando = false;
      },
      error: error => {
        console.error('Error al cargar la noticia', error);
        this.cargando = false;
      }
    });
  }
}
