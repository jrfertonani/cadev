import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TarefasService } from '../tarefas.service';
import { Tarefas } from '../tarefas.module';

@Component({
  selector: 'app-tarefas-create',
  templateUrl: './tarefas-create.component.html',
  styleUrl: './tarefas-create.component.scss',
})
export class TarefasCreateComponent implements OnInit {
  constructor(
    private tarefasService: TarefasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tarefasService.findById(id as string).subscribe((tarefas) => {
      this.tarefas = tarefas;
    });
  }

  tarefas: Tarefas = {
    id: 0,
    title: '',
    description: '',
    status: '',
  };

  save(): void {
    this.tarefasService.create(this.tarefas).subscribe(
      (resposta) => {
        this.tarefasService.mensagem('Tasks created successfully!');
        this.router.navigate(['tarefas']);
      },
      (err) => {}
    );
  }

  cancel(): void {
    this.router.navigate(['tarefas']);
  }

  update(): void {}
}
