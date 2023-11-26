import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTarefaComponent } from './add-tarefa.component';

describe('AddTarefaComponent', () => {
  let component: AddTarefaComponent;
  let fixture: ComponentFixture<AddTarefaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTarefaComponent]
    });
    fixture = TestBed.createComponent(AddTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
