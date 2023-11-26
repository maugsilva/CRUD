import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';
import { AddTarefaComponent } from './components/add-tarefa/add-tarefa.component';
import { EditarTarefaComponent } from './components/editar-tarefa/editar-tarefa.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent,
    AddTarefaComponent,
    EditarTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
