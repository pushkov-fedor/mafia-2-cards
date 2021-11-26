import { GamePhase } from './game-phase.enum';
import { GameResult } from './game-result.enum';
import { GameStatus } from './game-status.enum';
import { Player } from './player.model';
import { Vote } from './vote.model';

export class Game {
  private id: string;
  private gameStatus: GameStatus;
  private mafiaNumber: number;
  private policeNumber: number;
  private playersNumber: number;
  private players: Player[];
  private gameResult: GameResult;
  private gamePhase: GamePhase;
  private votingPull: Vote[];
}
