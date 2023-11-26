import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-add-tarefa',
  templateUrl: './add-tarefa.component.html',
  styleUrls: ['./add-tarefa.component.css']
})
export class AddTarefaComponent {
  form: FormGroup = new FormGroup ({
    titulo: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    concluida: new FormControl(false),
  });

  constructor(
    private tarefaService: TarefaService,
    private router: Router
    ){}

  onSubmit(){
    const tarefa: Tarefa = {...this.form.value};
    this.tarefaService.adicionarTarefa(tarefa).subscribe({
      next: () => this.router.navigate(['/tarefas']),
      error: (err) => alert("Ocorreu um erro, verifique!")
    });
  }
}
