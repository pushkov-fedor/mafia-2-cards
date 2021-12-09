import { CardType } from './card-type.enum';
import { Card } from './card.model';
import { GamePhase } from './game-phase.enum';
import { GameResult } from './game-result.enum';
import { GameStatus } from './game-status.enum';
import { Player } from './player.model';
import { Vote } from './vote.model';
import * as _ from 'lodash';
import { HealthStatus } from './health-status.enum';
import cryptoRandomString = require('crypto-random-string');
import { GameRoundAction } from './game-round-action.model';

export class Game {
  id: string;
  playersNumber: number;
  gameStatus: GameStatus;
  players: Player[];
  gameResult: GameResult;
  gamePhase: GamePhase;
  votingPull: Vote[];
  actions: GameRoundAction[];

  constructor(
    public civilsNumber: number,
    public mafiaNumber: number,
    public hasPolice: boolean,
  ) {
    this.id = cryptoRandomString({
      length: 6,
      type: 'distinguishable',
    }).toUpperCase();
    this.playersNumber = civilsNumber + mafiaNumber;
    this.gameStatus = GameStatus.Created;
    this.players = [];
    this.votingPull = [];
    this.actions = [];
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
    cards.forEach((card, index) => (this.players[index].card = card));
  }

  startNight(vote: Vote) {
    this.useVoteTemplate(
      vote,
      () => {
        this.gamePhase = GamePhase.MafiaTurn;
        this.actions.push(new GameRoundAction());
      },
      this.getAlivePlayersNumber.bind(this),
      GamePhase.BeforeNight,
    );
  }

  mafiaKill(vote: Vote) {
    this.useVoteTemplate(
      vote,
      () => {
        if (this.hasAlivePolice()) {
          this.gamePhase = GamePhase.PoliceTurn;
        } else {
          this.gamePhase = GamePhase.CivilsTurn;
        }
        const voteResultValue = this.getVoteResultValue();
        const player = this.getPlayerByName(voteResultValue);
        player.status = HealthStatus.Injured;
        const action = _.last(this.actions) as GameRoundAction;
        action.killedByMafia = player;
      },
      this.getAliveMafiaNumber.bind(this),
      GamePhase.MafiaTurn,
    );
  }

  policeCheck(playerNameToCheck: string, playerCardToCheck: 0 | 1) {
    if (this.gamePhase !== GamePhase.PoliceTurn) return;
    this.gamePhase = GamePhase.CivilsTurn;
    const player = this.getPlayerByName(playerNameToCheck);
    return {
      playerName: playerNameToCheck,
      playerCardIndex: playerCardToCheck,
      result: player.hasCardType(CardType.Mafia),
    };
  }

  civilsKill(vote: Vote) {
    this.useVoteTemplate(
      vote,
      () => {
        this.gamePhase = GamePhase.BeforeNight;
        const voteResultValue = this.getVoteResultValue();
        const player = this.getPlayerByName(voteResultValue);
        player.status = HealthStatus.Injured;
        const action = _.last(this.actions) as GameRoundAction;
        action.judgedByCivils = player;
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
    const revealedCard = player.revealCard(cardIndex);
    const action = _.last(this.actions) as GameRoundAction;
    switch (this.gamePhase) {
      case GamePhase.CardRevealAfterNight:
        this.gamePhase = GamePhase.CivilsTurn;
        action.killedByMafiaCard = revealedCard;
        return;
      case GamePhase.CardRevealAfterCourt:
        this.gamePhase = GamePhase.BeforeNight;
        action.judgedByCivilsCard = revealedCard;
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
    if (this.hasPolice) {
      cards.push(new Card(CardType.Police));
    }
    for (
      let i = 0;
      i < (this.hasPolice ? this.civilsNumber - 1 : this.civilsNumber);
      i++
    ) {
      cards.push(new Card(CardType.Civil));
    }
    cards = _.shuffle(cards);
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

  public hasPlayer(playerName: string) {
    return this.players.some((player) => player.name === playerName);
  }

  private hasAlivePolice() {
    return this.players.some((player) =>
      player.hasAliveCardType(CardType.Police),
    );
  }
}
