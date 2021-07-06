import { Player } from './../shared/models/player.model';
import { BASE_URL } from './../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Room } from '../shared/models/room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) {}

  room = new BehaviorSubject<Room>(null);
  player = new BehaviorSubject<Player>(null);

  createRoom(
    creatorName: string,
    players: number,
    mafia: number,
    polices: number,
  ) {
    return this.http.post<{ room: Room; player: Player }>(
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

  joinRoom(code: string, playerName: string) {
    return this.http.post<{ room: Room; player: Player }>(
      `${BASE_URL}room/join`,
      {
        code,
        playerName,
      },
    );
  }

  getAll() {
    return this.http.get(`${BASE_URL}room`);
  }

  get(code: string, params?: { [param: string]: string | string[] }) {
    return this.http.get<Room>(`${BASE_URL}room/${code}`, {
      params,
    });
  }
}
