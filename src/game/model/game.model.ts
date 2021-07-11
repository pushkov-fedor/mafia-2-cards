import { Player } from '../../room/model/player.model';
import { Room } from '../../room/model/room.model';
import { CardType } from './card-type.model';
import { Card } from './card.model';
import * as _ from 'lodash';
import { Citizen } from './citizen.model';
import { Day } from './day.model';

export class Game {
  roomCode: string;
  days: Day[] = [];
  citizens: Citizen[] = [];

  citizenNamesToKill: string[] = [];
  mafiaVotes = 0;

  get numberOfMafia() {
    return this.citizens.filter((citizen) =>
      citizen.cards.some((card) => card.cardType == CardType.MAFIA),
    ).length;
  }

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
  }

  nextDayStage() {
    const day = _.last(this.days) as Day;
    day.nextStage();
  }

  activeDayLog(message: string) {
    const day = _.last(this.days) as Day;
    day.log(message);
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

  kill(citizenName: string) {
    this.mafiaVotes++;
    this.citizenNamesToKill.push(citizenName);
    if (this.mafiaVotes == this.numberOfMafia) {
      const citizenIndexToKill = _.random(
        0,
        this.citizenNamesToKill.length - 1,
      );
      const nameToKill = this.citizenNamesToKill[citizenIndexToKill];
      const citizen = this.citizens.find(
        (citizen) => citizen.name == nameToKill,
      );
      citizen.shouldRevealCard = true;
      this.mafiaVotes = 0;
      this.citizenNamesToKill = [];
      return nameToKill;
    }
    return '';
  }
}
