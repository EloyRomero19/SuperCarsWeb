import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ModelosComponent } from './paginas/modelos/modelos.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { NoticiasComponent } from './paginas/noticias/noticias.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'modelos', component: ModelosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'noticias', component: NoticiasComponent }
];
