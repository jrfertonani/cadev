import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Dev } from './dev.module';

@Injectable({
  providedIn: 'root'
})
export class DevService {

    // baseUrl: string = environment.baseUrl;

    http = inject(HttpClient);

    URL = 'http://localhost:8080/dev';

    constructor(private _snack: MatSnackBar) {}

    findAll(): Observable<Dev[]>{
      return this.http.get<Dev[]>(this.URL);
    }

    findById(id: string): Observable<Dev> {
      const url = `${this.URL}/${id}`;
      return this.http.get<Dev>(url);
    }

    create(dev: Dev): Observable<Dev> {
      return this.http.post<Dev>(this.URL, dev);
    }


    update(dev: Dev): Observable<Dev> {
      const url = `${this.URL}/${dev.id}`;
      return this.http.put<Dev>(url, dev);
    }


    delete(id: string):  Observable<Dev> {
      const url = `${this.URL}/${id}`;
      return this.http.delete<Dev>(url);;
    }

    mensagem(str: String): void {
      this._snack.open(`${str}`, 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000,
      });
    }



}
