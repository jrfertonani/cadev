import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Tarefas } from './tarefas.module';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {


    // baseUrl: string = environment.baseUrl;

    http = inject(HttpClient);

    URL = 'http://localhost:8080/tarefas';

    constructor(private _snack: MatSnackBar) {}

    findAll(): Observable<Tarefas[]>{
      return this.http.get<Tarefas[]>(this.URL)
    }

    findById(id: string): Observable<Tarefas>{
      const url = `${this.URL}/${id}`;
      return this.http.get<Tarefas>(url)
    }

    create(tarefas: Tarefas): Observable<Tarefas>{
      return this.http.post<Tarefas>(this.URL,tarefas)
    }

    update(tarefas: Tarefas): Observable<Tarefas> {
      const url = `${this.URL}/${tarefas.id}`;
      return this.http.put<Tarefas>(url, tarefas);
    }


    delete(id: string):Observable<Tarefas>{
      const url = `${this.URL}/${id}`;
      return this.http.delete<Tarefas>(url)
    }

    mensagem(str: String): void {
      this._snack.open(`${str}`, 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000,
      });
    }



}
