import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DealCardsService {
  constructor(private http: HttpClient) {}

  getUserCard() {
    this.http
      .get('http://127.0.0.1:3000/all')
      .subscribe((res) => console.log(res));
  }
}
