import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';
import { AddTarefaComponent } from './components/add-tarefa/add-tarefa.component';
import { EditarTarefaComponent } from './components/editar-tarefa/editar-tarefa.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tarefas',
    pathMatch: 'full'
  },
  {
    path: 'tarefas',
    component: ListaTarefasComponent
  },
  {
    path: 'tarefas/nova',
    component: AddTarefaComponent
  },
  {
    path: 'tarefas/editar/:id',
    component: EditarTarefaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
