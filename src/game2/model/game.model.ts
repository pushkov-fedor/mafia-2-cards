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
import { HttpException } from '@nestjs/common';
import { GameAudioPhase } from './game-audio-phase.model';
import { NEXT_PHASE_TIMEOUT_NUMBER } from '../../constants';

export class Game {
  id: string;
  playersNumber: number;
  gameStatus: GameStatus;
  players: Player[];
  gameResult: GameResult;
  gamePhase: GamePhase;
  votingPull: Vote[];
  actions: GameRoundAction[];
  result: GameResult;
  gameAudioPhase: GameAudioPhase;
  gameCreatedTimestamp: Date;

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
    this.gameCreatedTimestamp = new Date();
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
        this.gameAudioPhase = GameAudioPhase.PlayersSleep;
        this.nextPhaseTimeout(
          GamePhase.MafiaTurn,
          GameAudioPhase.MafiaWakeUp,
          NEXT_PHASE_TIMEOUT_NUMBER,
        );
        // this.gamePhase = GamePhase.MafiaTurn;
      },
      this.getAlivePlayersNumber.bind(this),
      GamePhase.BeforeNight,
    );
  }

  mafiaKill(vote: Vote) {
    this.useVoteTemplate(
      vote,
      () => {
        const voteResultValue = this.getVoteResultValue();
        const player = this.getPlayerById(voteResultValue);
        player.status = HealthStatus.Injured;
        const action = new GameRoundAction();
        action.killedPlayer = player;
        action.message = 'Был(а) убит(а) ночью мафией';
        this.actions.push(action);
        this.gameAudioPhase = GameAudioPhase.MafiaSleep;
        if (this.hasAlivePolice()) {
          this.nextPhaseTimeout(
            GamePhase.PoliceTurn,
            GameAudioPhase.PoliceWakeUp,
            NEXT_PHASE_TIMEOUT_NUMBER,
          );
          // this.gamePhase = GamePhase.PoliceTurn;
        } else {
          this.players.forEach((player) => {
            if (player.status === HealthStatus.Injured) {
              player.status = HealthStatus.Dead;
            }
          });
          if (this.hasPolice) {
            this.nextPhaseTimeout(
              GamePhase.PoliceTurn,
              GameAudioPhase.PoliceWakeUp,
              NEXT_PHASE_TIMEOUT_NUMBER,
            );
            this.nextPhaseTimeout(
              GamePhase.Discussion,
              GameAudioPhase.PoliceSleep,
              3 * NEXT_PHASE_TIMEOUT_NUMBER,
            );
            this.nextPhaseTimeout(
              GamePhase.Discussion,
              GameAudioPhase.PlayersWakeUp,
              4 * NEXT_PHASE_TIMEOUT_NUMBER,
            );
          } else {
            this.nextPhaseTimeout(
              GamePhase.Discussion,
              GameAudioPhase.PlayersWakeUp,
              NEXT_PHASE_TIMEOUT_NUMBER,
            );
          }
        }
        this.gameFinishedCheck();
      },
      this.getAliveMafiaNumber.bind(this),
      GamePhase.MafiaTurn,
    );
  }

  endNight() {
    this.players.forEach((player) => {
      if (player.status === HealthStatus.Injured) {
        player.status = HealthStatus.Dead;
      }
    });
    this.gameAudioPhase = GameAudioPhase.PoliceSleep;
    this.gamePhase = GamePhase.Discussion;
    this.nextPhaseTimeout(
      GamePhase.Discussion,
      GameAudioPhase.PlayersWakeUp,
      NEXT_PHASE_TIMEOUT_NUMBER,
    );
  }

  startTrial(vote: Vote) {
    this.useVoteTemplate(
      vote,
      () => {
        this.gamePhase = GamePhase.CivilsTurn;
      },
      this.getAlivePlayersNumber.bind(this),
      GamePhase.Discussion,
    );
  }

  civilsKill(vote: Vote) {
    this.useVoteTemplate(
      vote,
      () => {
        this.gamePhase = GamePhase.BeforeNight;
        const voteResultValue = this.getVoteResultValue();
        const player = this.getPlayerById(voteResultValue);
        player.status = HealthStatus.Dead;
        const action = new GameRoundAction();
        action.killedPlayer = player;
        action.message = 'Был(а) убит(а) ночью мирными жителями';
        this.actions.push(action);
        this.gameFinishedCheck();
      },
      this.getAlivePlayersNumber.bind(this),
      GamePhase.CivilsTurn,
    );
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
    const playersAliveNumber = getAliveNumberFun();
    if (playersVotedNumber === playersAliveNumber) {
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
      player.isAliveCardType(CardType.Mafia),
    ).length;
  }

  private getAliveCivilsNumber() {
    return this.players.filter(
      (player) =>
        player.isAliveCardType(CardType.Civil) ||
        player.isAliveCardType(CardType.Police),
    ).length;
  }

  private getVoteResultValue() {
    return this.votingPull
      .sort(
        (a, b) =>
          this.votingPull.filter((v) => v.value === a.value).length -
          this.votingPull.filter((v) => v.value === b.value).length,
      )
      .pop().value;
  }

  private getPlayerByName(playerName: string) {
    return this.players.find((player) => player.name === playerName);
  }

  private getPlayerById(playerId: string) {
    return this.players.find((player) => player.id === playerId);
  }

  public getPlayerIdByName(playerName: string) {
    return this.getPlayerByName(playerName).id;
  }

  public hasPlayer(playerName: string) {
    return this.players.some((player) => player.name === playerName);
  }

  private hasAlivePolice() {
    return this.players.some(
      (player) =>
        player.isHealthStatusCardType(HealthStatus.Alive, CardType.Police) ||
        player.isHealthStatusCardType(HealthStatus.Injured, CardType.Police),
    );
  }

  private isMafiaWin() {
    return this.getAliveCivilsNumber() <= this.getAliveMafiaNumber();
  }
  private isCivilsWin() {
    return this.getAliveMafiaNumber() === 0;
  }

  private gameFinishedCheck() {
    if (this.isMafiaWin()) {
      this.gameStatus = GameStatus.Finished;
      this.result = GameResult.MafiaWins;
      return;
    }
    if (this.isCivilsWin()) {
      this.gameStatus = GameStatus.Finished;
      this.result = GameResult.CivilWins;
      return;
    }
  }

  private nextPhaseTimeout(
    gamePhase: GamePhase,
    gameAudioPhase: GameAudioPhase,
    timeoutNumber: number,
  ) {
    setTimeout(() => {
      this.gamePhase = gamePhase;
      this.gameAudioPhase = gameAudioPhase;
    }, timeoutNumber);
  }
}
