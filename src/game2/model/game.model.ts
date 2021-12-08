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
import cryptoRandomString = require('crypto-random-string');

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
    if (this.players.length < this.playersNumber) {
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
    this.useVoteTemplate(
      vote,
      () => {
        this.gamePhase = GamePhase.MafiaTurn;
      },
      this.getAlivePlayersNumber.bind(this),
      GamePhase.BeforeNight,
    );
  }

  mafiaKill(vote: Vote) {
    this.useVoteTemplate(
      vote,
      () => {
        this.gamePhase = GamePhase.PoliceTurn;
        const voteResultValue = this.getVoteResultValue();
        const player = this.getPlayerByName(voteResultValue);
        player.status = HealthStatus.Injured;
      },
      this.getAliveMafiaNumber.bind(this),
      GamePhase.MafiaTurn,
    );
  }

  policeCheck(playerNameToCheck: string, playerCardToCheck: 0 | 1) {
    if (this.gamePhase !== GamePhase.PoliceTurn) return;
    this.gamePhase = GamePhase.CardRevealAfterNight;
    const player = this.getPlayerByName(playerNameToCheck);
    return {
      playerName: playerNameToCheck,
      playerCardIndex: playerCardToCheck,
      result: player.haveCardTypeAt(CardType.Mafia, playerCardToCheck),
    };
  }

  civilsKill(vote: Vote) {
    this.useVoteTemplate(
      vote,
      () => {
        this.gamePhase = GamePhase.CardRevealAfterCourt;
        const voteResultValue = this.getVoteResultValue();
        const player = this.getPlayerByName(voteResultValue);
        player.status = HealthStatus.Injured;
      },
      this.getAliveCivilsNumber.bind(this),
      GamePhase.CivilsTurn,
    );
  }

  revealCard(playerName: string, cardIndex: 0 | 1) {
    if (
      !(
        this.gamePhase == GamePhase.CardRevealAfterNight ||
        this.gamePhase == GamePhase.CardRevealAfterCourt
      )
    )
      return;
    const player = this.getPlayerByName(playerName);
    player.revealCard(cardIndex);
    switch (this.gamePhase) {
      case GamePhase.CardRevealAfterNight:
        this.gamePhase = GamePhase.CivilsTurn;
        return;
      case GamePhase.CardRevealAfterCourt:
        this.gamePhase = GamePhase.BeforeNight;
    }
  }

  // Вспомогательные методы

  useVoteTemplate(
    vote: Vote,
    votingResultFun: () => void,
    getAliveNumberFun: () => number,
    gamePhase: GamePhase,
  ) {
    if (this.gamePhase !== gamePhase) return;
    const hasAlreadyVoted = !!this.hasVote(vote.playerName);
    if (hasAlreadyVoted) return;
    this.votingPull.push(vote);
    const playersVotedNumber = this.votingPull.length;
    const mafiaAliveNumber = getAliveNumberFun();
    if (playersVotedNumber === mafiaAliveNumber) {
      votingResultFun();
      this.votingPull = [];
    }
  }

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
      i <
      (this.cardsPerPlayer === CardsPerPlayer.One
        ? this.playersNumber
        : this.playersNumber * 2) -
        this.mafiaNumber -
        this.policeNumber;
      i++
    ) {
      cards.push(new Card(CardType.Civil));
    }
    cards = _.shuffle(cards);
    if (this.cardsPerPlayer === CardsPerPlayer.Two) {
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

  private getAliveCivilsNumber() {
    return this.players.filter((player) => player.hasAliveCard()).length;
  }

  private getVoteResultValue() {
    return this.votingPull
      .sort(
        (a, b) =>
          this.votingPull.filter((v) => v === a).length -
          this.votingPull.filter((v) => v === b).length,
      )
      .pop().value;
  }

  private getPlayerByName(playerName: string) {
    return this.players.find((player) => player.name === playerName);
  }

  public getPlayerIdByName(playerName: string) {
    return this.getPlayerByName(playerName).id;
  }
}
