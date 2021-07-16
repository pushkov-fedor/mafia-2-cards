import { Player } from './../shared/models/player.model';
import { BASE_URL } from './../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Room } from '../shared/models/room.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) {}

  room = new BehaviorSubject<Room>(null);
  player = new BehaviorSubject<Player>(null);

  waitRoom(code: string, playerName: string) {
    return this.http.post<Room>(`${environment.backendUrl}room/wait`, {
      code,
      playerName,
    });
  }

  createRoom(
    creatorName: string,
    players: number,
    mafia: number,
    polices: number,
  ) {
    return this.http.post<{ room: Room; player: Player }>(
      `${environment.backendUrl}room/create`,
      {
        creatorName,
        players,
        mafia,
        polices,
      },
    );
  }

  joinRoom(code: string, playerName: string) {
    return this.http.post<{ room: Room; player: Player }>(
      `${environment.backendUrl}room/join`,
      {
        code,
        playerName,
      },
    );
  }

  startRoom(code: string) {
    return this.http.post(`${environment.backendUrl}game/start/${code}`, {});
  }

  getAll() {
    return this.http.get(`${environment.backendUrl}room`);
  }

  get(code: string, params?: { [param: string]: string | string[] }) {
    return this.http.get<Room>(`${environment.backendUrl}room/${code}`, {
      params,
    });
  }
}
