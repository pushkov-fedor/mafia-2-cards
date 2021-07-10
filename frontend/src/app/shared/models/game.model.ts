import { Citizen } from './citizen.model';
import { Day } from './day.model';

export class Game {
  roomCode: string;
  days: Day[] = [];
  citizens: Citizen[] = [];
}
