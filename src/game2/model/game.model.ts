import cryptoRandomString from 'crypto-random-string';
import { CardType } from './card-type.enum';
import { Card } from './card.model';
import { CardsPerPlayer } from './cards-per-player.enum';
import { GamePhase } from './game-phase.enum';
import { GameResult } from './game-result.enum';
import { GameStatus } from './game-status.enum';
import { Player } from './player.model';
import { Vote } from './vote.model';
import * as _ from 'lodash';
import { HealthStatus } from './health-status.enum';

export class Game {
  id: string;
  gameStatus: GameStatus;
  players: Player[];
  gameResult: GameResult;
  gamePhase: GamePhase;
  votingPull: Vote[];

  constructor(
    public cardsPerPlayer: CardsPerPlayer,
    public mafiaNumber: number,
    public policeNumber: number,
    public playersNumber: number,
  ) {
    this.id = cryptoRandomString({
      length: 6,
      type: 'distinguishable',
    });
    this.gameStatus = GameStatus.Created;
    this.players = [];
    this.votingPull = [];
  }

  // Публичные методы

  addPlayer(player: Player) {
    if (this.players.length + 1 < this.playersNumber) {
      this.players.push(player);
    }
  }

  start() {
    this.gameStatus = GameStatus.Started;
    this.gamePhase = GamePhase.BeforeNight;
    const cards = this.generateCards();
    const cardChunks = _.chunk(cards, this.cardsPerPlayer + 1);
    cardChunks.forEach((chunk, index) => {
      this.players[index].cards = chunk;
    });
  }

  startNight(vote: Vote) {
    if (this.gamePhase !== GamePhase.BeforeNight) return;
    const hasAlreadyVoted = !!this.hasVote(vote.playerName);
    if (hasAlreadyVoted) return;
    this.votingPull.push(vote);
    const playersVotedNumber = this.votingPull.length;
    const playersAliveNumber = this.getAlivePlayersNumber();
    if (playersVotedNumber === playersAliveNumber) {
      this.gamePhase = GamePhase.MafiaTurn;
      this.votingPull = [];
    }
  }

  mafiaKill(vote: Vote) {
    if (this.gamePhase !== GamePhase.MafiaTurn) return;
    const hasAlreadyVoted = !!this.hasVote(vote.playerName);
    if (hasAlreadyVoted) return;
    const playersVotedNumber = this.votingPull.length;
    const mafiaAliveNumber = this.getAliveMafiaNumber();
    if (playersVotedNumber === mafiaAliveNumber) {
      const voteResult = this.getVoteResultValue();
      const player = this.players.find(
        (player) => player.name === voteResult.value,
      );
      player.status = HealthStatus.Injured;
    }
  }

  // Вспомогательные методы

  private generateCards() {
    let cards = [];
    for (let i = 0; i < this.mafiaNumber; i++) {
      cards.push(new Card(CardType.Mafia));
    }
    for (let i = 0; i < this.policeNumber; i++) {
      cards.push(new Card(CardType.Police));
    }
    for (
      let i = 0;
      i < this.playersNumber - this.mafiaNumber - this.policeNumber;
      i++
    ) {
      cards.push(new Card(CardType.Civil));
    }
    cards = _.shuffle(cards);
    if ((this.cardsPerPlayer = CardsPerPlayer.Two)) {
      let cardChunks = _.chunk(cards, 2);
      while (
        cardChunks.some(
          ([c1, c2]: [Card, Card]) =>
            (c1.type === CardType.Mafia && c2.type === CardType.Police) ||
            (c1.type === CardType.Police && c2.type === CardType.Mafia),
        )
      ) {
        cards = _.shuffle(cards);
        cardChunks = _.chunk(cards, 2);
      }
    }
    return cards;
  }

  private hasVote(playerName: string) {
    return !!this.votingPull.find((vote) => vote.playerName === playerName);
  }

  private getAlivePlayersNumber() {
    return this.players.filter((player) => player.status === HealthStatus.Alive)
      .length;
  }

  private getAliveMafiaNumber() {
    return this.players.filter((player) =>
      player.hasAliveCardType(CardType.Mafia),
    ).length;
  }

  private getVoteResultValue() {
    return this.votingPull
      .sort(
        (a, b) =>
          this.votingPull.filter((v) => v === a).length -
          this.votingPull.filter((v) => v === b).length,
      )
      .pop();
  }
}
