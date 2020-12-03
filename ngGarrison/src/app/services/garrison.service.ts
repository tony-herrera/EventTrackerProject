import { Veteran } from './../models/veteran';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GarrisonService {
  // baseUrl = 'http://localhost:8085/';
  // baseUrl = '/GarrisonHub/';
  baseUrl = environment.baseUrl;

  url = this.baseUrl + 'api/veterans';

  constructor(private http: HttpClient) {}

  index(): Observable<Veteran[]> {
    return this.http.get<Veteran[]>(this.url + '?sorted=true').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }

  create(veteran: Veteran) {
    console.log(veteran);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    console.log(veteran);
    return this.http.post<any>(this.url, veteran, httpOptions).pipe(
      catchError((theError) => {
        console.error('error creating veteran');
        console.error(theError);
        return throwError('error in creating veteran');
      })
    );
  }

  update(veterans: Veteran): Observable<Veteran> {
    console.log(veterans.id);

    return this.http.put<Veteran>(this.url + '/' + veterans.id, veterans).pipe(
      catchError((err: any) => {
        console.log(err);
        console.log(veterans);
        return throwError('Error updating todo list');
        console.log(veterans);
      })
    );
  }

  destroy(veteranid: number): Observable<boolean> {
    return this.http.delete<boolean>(this.url + '/' + veteranid).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          'GarrisonService.destroy(): Error deleting todo list'
        );
      })
    );
  }
}
