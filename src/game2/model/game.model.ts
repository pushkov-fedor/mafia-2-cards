import cryptoRandomString from 'crypto-random-string';
import { CardType } from '../../game/model/card-type.model';
import { Card } from './card.model';
import { CardsPerPlayer } from './cards-per-player.enum';
import { GamePhase } from './game-phase.enum';
import { GameResult } from './game-result.enum';
import { GameStatus } from './game-status.enum';
import { Player } from './player.model';
import { Vote } from './vote.model';

export class Game {
  id: string;
  gameStatus: GameStatus;
  players: Player[];
  gameResult: GameResult;
  gamePhase: GamePhase;
  votingPull: Vote[];

  constructor(
    private cardsPerPlayer: CardsPerPlayer,
    private mafiaNumber: number,
    private policeNumber: number,
    private playersNumber: number,
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

  // Вспомогательные методы
}
