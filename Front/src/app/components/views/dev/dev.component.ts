import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { DevService } from './dev.service';
import { Dev } from './dev.module';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrl: './dev.component.scss'
})
export class DevComponent implements OnInit {
  displayedColumns = ['id', 'name', 'email', 'dataCadastro', 'categoria', 'actions'];

  dev: Dev[] = [];

  constructor(
    private devService: DevService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.devService.findAll().subscribe((dev) => {
      this.dev = dev;
    })
  }

  delete(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.devService.delete(id as string).subscribe((dev) => {
      dev = dev;
        this.router.navigate(['dev']);
    });
  }

  navegarParaPersonCreate() {
    this.router.navigate(['dev/create']);
  }
}
