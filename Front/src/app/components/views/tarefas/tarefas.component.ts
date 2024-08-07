import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { Tarefas } from './tarefas.module';
import { TarefasService } from './tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.scss'
})
export class TarefasComponent implements OnInit {

  displayedColumns = ['id', 'title', 'description', 'status', 'actions'];

  tarefas: Tarefas[] = [];

  constructor(
    private tarefasService: TarefasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.tarefasService.findAll().subscribe((tarefas) => {
      this.tarefas = tarefas
  })

  }

  delete(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.tarefasService.delete(id as string).subscribe((tarefas) => {
      tarefas = tarefas;
        this.router.navigate(['tarefas']);
    });
  }



  navegarParaPersonCreate() {
    this.router.navigate(['tarefas/create']);
  }
}
