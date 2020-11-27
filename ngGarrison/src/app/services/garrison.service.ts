import { Veteran } from './../models/veteran';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  create(veteran: Veteran): void {
    this.veterans.push(veteran);
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
