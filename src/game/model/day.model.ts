import { DayStage } from './day-stage.model';

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
  dayLog: string[] = [];
  currentStageIndex: number;
  killedByCitizenKillStage: string;
  killedByMafiaKillStage: string;

  get currentStage() {
    return this.dayRoutine[this.currentStageIndex];
  }

  constructor(isFirstDay = false) {
    this.currentStageIndex = isFirstDay ? 0 : 1;
    if (isFirstDay) {
      this.log('Пока ничего не произошло');
      setTimeout(() => {
        this.currentStageIndex = 4;
      }, 15 * 1000);
    }
  }

  nextStage() {
    this.currentStageIndex++;
    if (this.currentStage == DayStage.CardRevealRequest) {
      this.log('Ждем вскрытия карт');
    }
  }

  log(message) {
    this.dayLog.push(message);
  }
}
