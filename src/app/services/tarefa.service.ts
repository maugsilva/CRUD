import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${this.baseUrl}/tarefas`);
  }

  getTarefa(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.baseUrl}/tarefas/${id}`);
  }

  adicionarTarefa(tarefa: Tarefa): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/tarefas`, tarefa);
  }

  editarTarefa(id: number, tarefa: Tarefa): Observable<void>{
    return this.http.put<void>(`${this.baseUrl}/tarefas/${id}`, tarefa);
  }

  deletarTarefa(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/tarefas/${id}`);
  }
}



