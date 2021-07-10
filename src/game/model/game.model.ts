import { Room } from '../../room/model/room.model';
import { Card } from './card.model';

export interface Citizen {
  name: string;
  canPlay: boolean;
  shouldRevealCard: boolean;
  cards: Card[];
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
}
