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

  // index(): Observable<Veteran[]> {
  //   return this.http.get<Veteran[]>(this.url + '?sorted=true').pipe(
  //     catchError((err: any) => {
  //       console.log(err);
  //       return throwError('KABOOM');
  //     })
  //   );
  // }

  generateId() {
    return this.veterans[this.veterans.length - 1].vetId + 1;
  }

  create(veteran: Veteran): void {
    veteran.vetId = this.generateId();
    this.veterans.push(veteran);
  }

  updateVeteran(veteran: Veteran) {
    for (let i = 0; i < this.veterans.length; i++) {
      if (this.veterans[i].vetId == veteran.vetId) {
        this.veterans[i] = veteran;
      }
    }
  }

  destroy(vetId: number) {
    for (let i = 0; i < this.veterans.length; i++) {
      if (this.veterans[i].vetId === vetId) {
        this.veterans.splice(i, 1);
      }
    }
  }

  index(): Veteran[] {
    return [...this.veterans];
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
