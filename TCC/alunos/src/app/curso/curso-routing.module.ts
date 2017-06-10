import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudcursoComponent } from './crudcurso/crudcurso.component';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';


const routes: Routes = [
  {
    path: 'cursos', component: CrudcursoComponent,
    children: [
      { path: '', component: ListaComponent },
      { path: 'detalhes/:id', component: DetalhesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule {
  constructor() {


  }

}
