import { Overlay } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../constants';
import { Game } from '../shared/models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  getGameStatus(roomCode: string) {
    return this.http.get<Game>(`${BASE_URL}game/status/${roomCode}`);
  }
}
