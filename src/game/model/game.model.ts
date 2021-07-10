import { Player } from '../../room/model/player.model';
import { RoomStatus } from '../../room/model/room-status.model';
import { Room } from '../../room/model/room.model';
import { CardType } from './card-type.model';
import { Card } from './card.model';
import * as _ from 'lodash';

export class Citizen {
  canPlay = true;
  shouldRevealCard = false;

  constructor(public name: string, public cards: Card[] = []) {}
}

export enum DayStage {
  CitizenWelcome,
  CitizenKill,
  CardRevealRequest,
  CardRevealResult,
  MafiaKill,
  PoliceCheck,
  Finish,
}

export class Day {
  dayRoutine: DayStage[] = [
    DayStage.CitizenWelcome,
    DayStage.CitizenKill,
    DayStage.CardRevealRequest,
    DayStage.CardRevealResult,
    DayStage.MafiaKill,
    DayStage.PoliceCheck,
    DayStage.CardRevealRequest,
    DayStage.CardRevealResult,
    DayStage.Finish,
  ];
  currentStageIndex: number;
  killedByCitizenKillStage: string;
  killedByMafiaKillStage: string;

  get currentStage() {
    return this.dayRoutine[this.currentStageIndex];
  }

  constructor(isFirstDay = false) {
    this.currentStageIndex = isFirstDay ? 0 : 1;
    if (isFirstDay) {
      setTimeout(() => {
        this.nextStage();
      }, 15 * 1000);
    }
  }

  nextStage() {
    this.currentStageIndex++;
  }
}

export class Game {
  roomCode: string;
  days: Day[] = [];
  citizens: Citizen[] = [];

  constructor(room: Room) {
    this.roomCode = room.code;
    const { players, numberOfMafia, numberOfPlayers, numberOfPolices } = room;
    const cards = this.generateCards(
      numberOfPlayers * 2 - numberOfMafia - numberOfPolices,
      numberOfMafia,
      numberOfPolices,
    );
    this.citizens = this.players2Citizens(players, cards);
    this.days.push(new Day(true));
    room.roomStatus = RoomStatus.ACTIVE;
  }

  private players2Citizens(players: Player[], cards: Card[]) {
    const cardChunks = _.chunk(cards, 2);
    return players.map(
      (player, index) => new Citizen(player.name, cardChunks[index]),
    );
  }

  private generateCards(
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
