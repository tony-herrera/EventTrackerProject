import { Veteran } from './../models/veteran';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GarrisonService implements OnInit {
  veterans: Veteran[] = [];

   baseUrl = 'http://localhost:8085/';
  url = this.baseUrl + 'api/veterans';

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
        Authorization: 'my-auth-token',
      }),
    };
    this.veterans.push(veteran);
    return this.http
      .post<any>(this.url, veteran, httpOptions)
      .pipe(catchError(this.handleError()));
  }
  handleError(): (err: any, caught: Observable<any>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
