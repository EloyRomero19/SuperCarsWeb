import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ModelosComponent } from './pages/modelos/modelos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'modelos', component: ModelosComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];
