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

  startNight(roomCode: string) {
    const game = this.getGameByRoomCode(roomCode);
    game.startNight();
    return game;
  }

  startJudge(roomCode) {
    const game = this.getGameByRoomCode(roomCode);
    game.startJudge();
    return game;
  }

  killByMafia(roomCode: string, citizenName: string) {
    const game = this.getGameByRoomCode(roomCode);
    const killedCitizen = game.killByMafia(citizenName);
    if (killedCitizen) {
      game.activeDayLog(`Сегодня мафия убила "${killedCitizen}"`);
      game.nextDayStage();
    }
    return game;
  }

  killByCivil(roomCode: string, citizenName: string) {
    const game = this.getGameByRoomCode(roomCode);
    const killedCitizen = game.killByCivil(citizenName);
    if (killedCitizen) {
      game.activeDayLog(`Сегодня жители убили "${killedCitizen}"`);
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
    citizen.shouldRevealCard = false;
    const card = citizen.cards[cardIndex];
    card.isRevealed = true;
    game.activeDayLog(`Вскрытая карта: ${this.cardType2String(card.cardType)}`);
    game.nextDayStage();
    return game;
  }

  getGameByRoomCode(roomCode: string) {
    return this.games.find((game) => game.roomCode == roomCode);
  }

  private cardType2String(cardType: CardType) {
    switch (cardType) {
      case CardType.CIVIL:
        return 'Мирный житель';
      case CardType.MAFIA:
        return 'Мафия';
      case CardType.POLICE:
        return 'Комиссар';
    }
  }
}
