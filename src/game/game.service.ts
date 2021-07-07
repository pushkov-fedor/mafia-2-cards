import { Injectable } from '@nestjs/common';
import { RoomService } from '../room/room.service';
import { CardType } from './model/card-type.model';
import * as _ from 'lodash';
import { Card } from './model/card.model';
import { RoomStatus } from '../room/model/room-status.model';

@Injectable()
export class GameService {
  constructor(private roomService: RoomService) {}

  startGame(roomCode: string) {
    const room = this.roomService.getByCode(roomCode);
    const { numberOfPlayers, numberOfMafia, numberOfPolices } = room;
    const cards = this.generateCards(
      numberOfPlayers * 2 - numberOfMafia - numberOfPolices,
      numberOfMafia,
      numberOfPolices,
    );
    const cardChunks = _.chunk(cards, 2);
    const players = room.players;
    players.forEach((player, index) => (player.cards = cardChunks[index]));
    room.roomStatus = RoomStatus.ACTIVE;
  }

  generateCards(
    numberOfCivils: number,
    numberOfMafia: number,
    numberOfPolices: number,
  ) {
    const cards = new Array(numberOfCivils).fill(CardType.CIVIL);
    for (let i = 0; i < numberOfMafia; i++) {
      cards.push(CardType.MAFIA);
    }
    for (let i = 0; i < numberOfPolices; i++) {
      cards.push(CardType.POLICE);
    }
    return (_.shuffle(cards) as CardType[]).map(
      (cardType) => new Card(cardType),
    );
  }
}
