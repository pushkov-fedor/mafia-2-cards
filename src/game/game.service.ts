import { Injectable } from '@nestjs/common';
import { RoomService } from '../room/room.service';
import { CardType } from './model/card-type.model';
import * as _ from 'lodash';
import { Card } from './model/card.model';
import { Game } from './model/game.model';
import { RoomStatus } from '../room/model/room-status.model';

@Injectable()
export class GameService {
  constructor(private roomService: RoomService) {}
  private games: Game[] = [];

  startGame(roomCode: string) {
    const room = this.roomService.getByCode(roomCode);
    room.roomStatus = RoomStatus.ACTIVE;
    const game = new Game(room);
    this.games.push(game);
    return game;
  }

  killCitizen(roomCode: string, citizenName: string) {
    const game = this.getGameByRoomCode(roomCode);
    const killedCitizen = game.kill(citizenName);
    if (killedCitizen) {
      game.activeDayLog(`Сегодня убили "${killedCitizen}"`);
      game.nextDayStage();
    }
    return game;
  }

  policeCheck(roomCode: string, citizenName: string, cardIndex: number) {
    const game = this.getGameByRoomCode(roomCode);
    const citizen = game.citizens.find(
      (citizen) => citizen.name == citizenName,
    );
    setTimeout(() => game.nextDayStage(), 10 * 1000);
    return citizen.cards[cardIndex];
  }

  cardReveal(roomCode: string, citizenName: string, cardIndex: number) {
    const game = this.getGameByRoomCode(roomCode);
    const citizen = game.citizens.find(
      (citizen) => citizen.name == citizenName,
    );
    const card = citizen.cards[cardIndex];
    card.isRevealed = true;
    game.nextDayStage();
    return game;
  }

  getGameByRoomCode(roomCode: string) {
    return this.games.find((game) => game.roomCode == roomCode);
  }
}
