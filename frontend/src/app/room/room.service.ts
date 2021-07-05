import { BASE_URL } from './../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) {}

  createRoom(
    creatorName: string,
    players: number,
    mafia: number,
    polices: number,
  ) {
    return this.http.post(
      `${BASE_URL}room/create`,
      {
        creatorName,
        players,
        mafia,
        polices,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json ',
        },
      },
    );
  }

  getAll() {
    return this.http.get(`${BASE_URL}room`);
  }
}
