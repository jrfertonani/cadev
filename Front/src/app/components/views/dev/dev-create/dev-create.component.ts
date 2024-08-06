import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DevService } from '../dev.service';
import { Dev } from '../dev.module';

@Component({
  selector: 'app-dev-create',
  templateUrl: './dev-create.component.html',
  styleUrl: './dev-create.component.scss'
})
export class DevCreateComponent implements OnInit {
  constructor(
    private devService: DevService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.devService.findById(id as string).subscribe((dev) => {
      this.dev = dev;
    });
  }

  dev: Dev = {
    id: 0,
    name: '',
    email: '',
    dataCadastro: 0,
    status: ''
  };

  save(): void {
    this.devService.create(this.dev).subscribe(
      (resposta) => {
        this.devService.mensagem('Dev created successfully!');
        this.router.navigate(['dev']);
      },
      (err) => {

      }
    );
  }



  cancel(): void {
    this.router.navigate(['dev']);
  }

  update(): void {
    this.devService.update(this.dev).subscribe(
      (Response)=> {
        this.devService.mensagem('Dev changed successfully!');
        this.router.navigate(['dev']);

      },
      (err)=> {

      }
    );
  }

}
