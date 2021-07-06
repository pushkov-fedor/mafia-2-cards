import { BASE_URL } from './../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Room } from '../shared/models/room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) {}

  room = new BehaviorSubject<Room>(null);

  createRoom(
    creatorName: string,
    players: number,
    mafia: number,
    polices: number,
  ) {
    return this.http.post<Room>(
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
