import { Overlay } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../constants';
import { Card } from '../shared/models/card.model';
import { Game } from '../shared/models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  getGameStatus(roomCode: string) {
    return this.http.get<Game>(`${BASE_URL}game/status/${roomCode}`);
  }

  killByMafia(roomCode: string, citizenName: string) {
    return this.http.post<Game>(`${BASE_URL}game/killByMafia`, {
      roomCode,
      citizenName,
    });
  }

  killByCivil(roomCode: string, citizenName: string) {
    return this.http.post<Game>(`${BASE_URL}game/killByCivil`, {
      roomCode,
      citizenName,
    });
  }

  policeCheck(roomCode: string, citizenName: string, cardIndex: string) {
    return this.http.post<Card>(`${BASE_URL}game/policeCheck`, {
      roomCode,
      citizenName,
      cardIndex,
    });
  }

  cardReveal(roomCode: string, citizenName: string, cardIndex: number) {
    return this.http.post<Game>(`${BASE_URL}game/cardReveal`, {
      roomCode,
      citizenName,
      cardIndex,
    });
  }

  startNight(roomCode) {
    return this.http.post<Game>(`${BASE_URL}game/startNight`, {
      roomCode,
    });
  }
}
