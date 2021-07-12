import { Citizen } from './citizen.model';
import { Day } from './day.model';
import { GameStatus } from './game-status.model';

export class Game {
  roomCode: string;
  gameStatus: GameStatus;
  gameResultMessage: string;
  days: Day[] = [];
  citizens: Citizen[] = [];
  civilVotes: number;
}
