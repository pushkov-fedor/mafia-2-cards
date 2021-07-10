import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  getGameStatus(roomCode: string) {
    return this.http.get(`${BASE_URL}game/status/${roomCode}`);
  }
}
