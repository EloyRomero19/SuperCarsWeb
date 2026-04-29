import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ModelosComponent } from './paginas/modelos/modelos.component';
import { NoticiasComponent } from './paginas/noticias/noticias.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'modelos', component: ModelosComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];
