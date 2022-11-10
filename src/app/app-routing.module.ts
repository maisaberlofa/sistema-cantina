import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDetalhesComponent } from './clientes/cliente-detalhes/cliente-detalhes.component';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'detalhes/:id', component: ClienteDetalhesComponent },
  { path: 'novocliente', component: ClienteFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
